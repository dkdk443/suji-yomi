import type { ChoiceSet, Level, Question } from '../types';
import { CHOICE_SETS, QUESTIONS } from './questions';

export interface QuizRepository {
	getDailyQuestions(date: string): Promise<Question[]>;
	getChoiceSet(questionId: string, level: Level): Promise<ChoiceSet>;
}

/** バンドルされた静的データを返すだけの実装。将来は日付を seed にした日替わり出題や
 *  API 経由の取得に差し替える想定で、呼び出し側は QuizRepository にのみ依存する。 */
export class StaticQuizRepository implements QuizRepository {
	async getDailyQuestions(_date: string): Promise<Question[]> {
		return QUESTIONS;
	}

	async getChoiceSet(questionId: string, level: Level): Promise<ChoiceSet> {
		return CHOICE_SETS[questionId][level];
	}
}
