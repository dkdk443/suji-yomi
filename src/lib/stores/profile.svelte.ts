import { getContext, setContext } from 'svelte';
import { browser } from '$app/environment';
import { rankForLevel } from '../data/ranks';

const KEY = Symbol('profile-store');
const STORAGE_KEY = 'sujiyomi:profile';

interface StoredProfile {
	totalPoints: number;
	level: number;
	levelPoints: number;
	streakDays: number;
	lastPlayedDate: string | null;
}

const DEFAULT_PROFILE: StoredProfile = {
	totalPoints: 0,
	level: 1,
	levelPoints: 0,
	streakDays: 0,
	lastPlayedDate: null
};

/** レベル N から N+1 に必要なポイント量 */
function levelTarget(level: number): number {
	return 300 + (level - 1) * 200;
}

function todayKey(): string {
	return new Date().toISOString().slice(0, 10);
}

function daysBetween(a: string, b: string): number {
	return Math.round((new Date(b).getTime() - new Date(a).getTime()) / 86_400_000);
}

function loadInitial(): StoredProfile {
	if (!browser) return DEFAULT_PROFILE;
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (raw) return { ...DEFAULT_PROFILE, ...JSON.parse(raw) };
	} catch {
		// 壊れたデータは無視してデフォルトから始める
	}
	return DEFAULT_PROFILE;
}

export class ProfileStore {
	totalPoints = $state(0);
	level = $state(1);
	levelPoints = $state(0);
	streakDays = $state(0);
	lastPlayedDate = $state<string | null>(null);
	/** 直近のセッションでレベルアップしたかどうか（結果画面の表示に使う） */
	leveledUpThisSession = $state(false);
	/** 直近のセッションでランク（称号）が変わったかどうか */
	rankedUpThisSession = $state(false);
	/** ランクアップ演出用の遷移前ランク名 */
	previousRankName = $state<string | null>(null);

	constructor() {
		const initial = loadInitial();
		this.totalPoints = initial.totalPoints;
		this.level = initial.level;
		this.levelPoints = initial.levelPoints;
		this.streakDays = initial.streakDays;
		this.lastPlayedDate = initial.lastPlayedDate;
	}

	levelTarget = $derived(levelTarget(this.level));
	rank = $derived(rankForLevel(this.level));

	/** セッション開始時に呼ぶ。レベルアップ／ランクアップの演出フラグをクリアする */
	resetSessionFlags() {
		this.leveledUpThisSession = false;
		this.rankedUpThisSession = false;
		this.previousRankName = null;
	}

	/**
	 * 1問正解するたびに呼ぶ。ポイント加算・レベルアップ／ランクアップ判定・連続日数更新をまとめて行う。
	 * セッション途中で離脱しても、そこまでに正解した分はここで確定させる。
	 */
	recordAnswer(pointsGained: number) {
		const rankBefore = rankForLevel(this.level);

		this.totalPoints += pointsGained;
		this.levelPoints += pointsGained;
		while (this.levelPoints >= levelTarget(this.level)) {
			this.levelPoints -= levelTarget(this.level);
			this.level += 1;
			this.leveledUpThisSession = true;
		}

		const rankAfter = rankForLevel(this.level);
		if (rankAfter.name !== rankBefore.name) {
			if (!this.rankedUpThisSession) {
				this.previousRankName = rankBefore.name;
			}
			this.rankedUpThisSession = true;
		}

		const today = todayKey();
		if (this.lastPlayedDate !== today) {
			const consecutive = this.lastPlayedDate
				? daysBetween(this.lastPlayedDate, today) === 1
				: false;
			this.streakDays = consecutive ? this.streakDays + 1 : 1;
			this.lastPlayedDate = today;
		}

		this.persist();
	}

	private persist() {
		if (!browser) return;
		const data: StoredProfile = {
			totalPoints: this.totalPoints,
			level: this.level,
			levelPoints: this.levelPoints,
			streakDays: this.streakDays,
			lastPlayedDate: this.lastPlayedDate
		};
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
		} catch {
			// ストレージが使えない環境（プライベートモード等）では無視
		}
	}
}

export function provideProfileStore(): ProfileStore {
	const store = new ProfileStore();
	setContext(KEY, store);
	return store;
}

export function useProfileStore(): ProfileStore {
	const store = getContext<ProfileStore>(KEY);
	if (!store) throw new Error('ProfileStore is not provided in this component tree');
	return store;
}
