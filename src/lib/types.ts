export type Level = 'easy' | 'mid' | 'hard';
export type Screen = 'home' | 'quiz' | 'answer' | 'result' | 'terms';
export type IndustryCode = '01' | '02' | '03' | '04';

export interface FinancialSegment {
	label: string;
	value: number;
	color: string;
}

export interface BalanceSheetColumn {
	title: string;
	segments: FinancialSegment[];
}

export interface LabeledValue {
	label: string;
	value: string;
}

export interface KPIItem extends LabeledValue {
	percent: number;
	color: string;
}

export interface Question {
	id: string;
	answerName: string;
	sector: string;
	industryCode: IndustryCode;
	totalLabel: string;
	columns: BalanceSheetColumn[];
	incomeStatement: LabeledValue[];
	kpis: KPIItem[];
	extra: LabeledValue[];
	point: string;
	reasons: string[];
}

export interface ChoiceSet {
	choices: string[];
	correctIndex: number;
}

export interface LevelConfig {
	label: string;
	basePoints: number;
	hintCost: number;
	description: string;
}

export interface QuizResult {
	correct: boolean;
	gained: number;
	hintsUsed: number;
	companyName: string;
	tag: string;
}

export interface IndustryMode {
	code: IndustryCode;
	name: string;
	description: string;
	progressLabel: string;
	accent: string;
	unlocked: boolean;
}

export type TermGroup = 'left' | 'right' | 'kpi';

export interface Term {
	title: string;
	enName: string;
	group: TermGroup;
	/** 貸借対照表・KPIのラベル文字列とのあいまい一致に使う候補語 */
	aliases: string[];
	definition: string;
	metaphor: string;
	metaphorLine: string;
	moreHeading: string;
	moreGood: string;
	moreBad: string;
	lessHeading: string;
	lessGood: string;
	lessBad: string;
	quizSpot: string;
}
