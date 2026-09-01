import type { Level, LevelConfig } from '../types';

export const LEVELS: Record<Level, LevelConfig> = {
	easy: {
		label: '初級',
		basePoints: 100,
		hintCost: 20,
		description:
			'まったく別の業界から4択。財務の形の違いが大きいので、慣れていなくても当てられます。'
	},
	mid: {
		label: '中級',
		basePoints: 140,
		hintCost: 30,
		description: '近い規模・近い分野が混ざる4択。指標の水準まで見る必要があります。'
	},
	hard: {
		label: '上級',
		basePoints: 180,
		hintCost: 40,
		description: '同じ業界の競合4社から。原価率や1店舗あたりの数字まで踏み込みます。'
	}
};

export const LEVEL_ORDER: Level[] = ['easy', 'mid', 'hard'];
