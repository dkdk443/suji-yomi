import { getContext, setContext } from 'svelte';
import type { IndustryCode, Level, Question, Screen, QuizResult, Term } from '../types';
import { CHOICE_SETS, QUESTIONS } from '../data/questions';
import { LEVELS } from '../data/levels';
import { shuffle } from '../utils/shuffle';
import type { ProfileStore } from './profile.svelte';

const KEY = Symbol('quiz-store');

export class QuizStore {
	screen = $state<Screen>('home');
	/** 現在のセッションで出題する問題の集合（全問 or 業界で絞り込んだサブセット） */
	questionPool = $state<Question[]>(QUESTIONS);
	questionIndex = $state(0);
	/** 1 = BSのみ / 2 = +損益計算書 / 3 = +非財務データ */
	hintStage = $state(1);
	picked = $state<number | null>(null);
	results = $state<QuizResult[]>([]);
	level = $state<Level>('easy');
	sheetTerm = $state<Term | null>(null);
	/** 出題順（questionPool のインデックス列）。セッション開始のたびにシャッフルする */
	order = $state<number[]>(QUESTIONS.map((_, i) => i));

	currentQuestion = $derived(this.questionPool[this.order[this.questionIndex]]);
	currentChoiceSet = $derived(CHOICE_SETS[this.currentQuestion.id][this.level]);
	potentialPoints = $derived.by(() => {
		const cfg = LEVELS[this.level];
		return cfg.basePoints - (this.hintStage - 1) * cfg.hintCost;
	});
	showIncomeStatement = $derived(this.hintStage >= 2);
	showExtraData = $derived(this.hintStage >= 3);
	canRevealHint = $derived(this.hintStage < 3 && this.picked === null);
	isLastQuestion = $derived(this.questionIndex >= this.questionPool.length - 1);
	lastResult = $derived(this.results[this.results.length - 1]);
	totalPoints = $derived(this.results.reduce((sum, r) => sum + r.gained, 0));
	correctCount = $derived(this.results.filter((r) => r.correct).length);

	constructor(private profile: ProfileStore) {}

	private beginSession(pool: Question[]) {
		this.screen = 'quiz';
		this.questionPool = pool;
		this.order = shuffle(pool.map((_, i) => i));
		this.questionIndex = 0;
		this.hintStage = 1;
		this.picked = null;
		this.results = [];
		this.profile.resetSessionFlags();
	}

	start() {
		this.beginSession(QUESTIONS);
	}

	startIndustry(code: IndustryCode) {
		const pool = QUESTIONS.filter((q) => q.industryCode === code);
		this.beginSession(pool);
	}

	pick(index: number) {
		if (this.picked !== null) return;
		const question = this.currentQuestion;
		const choiceSet = this.currentChoiceSet;
		const correct = index === choiceSet.correctIndex;
		const gained = correct ? this.potentialPoints : 0;
		const hintsUsed = this.hintStage - 1;
		this.picked = index;
		// 選択の視覚フィードバック（正誤の色反転）を見せてから解説画面へ遷移する
		setTimeout(() => {
			this.results.push({
				correct,
				gained,
				hintsUsed,
				companyName: question.answerName,
				tag: question.sector.split(' /')[0]
			});
			// セッションを最後まで終えなくても、正解した分はその場でプロフィールに確定させる
			this.profile.recordAnswer(gained);
			this.screen = 'answer';
		}, 520);
	}

	nextHint() {
		this.hintStage = Math.min(3, this.hintStage + 1);
	}

	next() {
		if (this.isLastQuestion) {
			this.screen = 'result';
			return;
		}
		this.questionIndex += 1;
		this.hintStage = 1;
		this.picked = null;
		this.screen = 'quiz';
	}

	setLevel(level: Level) {
		this.level = level;
	}

	goHome() {
		this.screen = 'home';
	}

	goScreen(screen: Screen) {
		this.screen = screen;
	}

	openTerm(term: Term | undefined) {
		if (term) this.sheetTerm = term;
	}

	closeSheet() {
		this.sheetTerm = null;
	}
}

export function provideQuizStore(profile: ProfileStore): QuizStore {
	const store = new QuizStore(profile);
	setContext(KEY, store);
	return store;
}

export function useQuizStore(): QuizStore {
	const store = getContext<QuizStore>(KEY);
	if (!store) throw new Error('QuizStore is not provided in this component tree');
	return store;
}
