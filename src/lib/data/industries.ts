import type { IndustryMode } from '../types';

export const INDUSTRY_MODES: IndustryMode[] = [
	{
		code: '01',
		name: 'ゲーム・エンタメ',
		description: '無形資産と現金の山を読む',
		progressLabel: '全3問',
		accent: '#29a06a',
		unlocked: true
	},
	{
		code: '02',
		name: '小売・製造小売',
		description: '在庫と店舗の重さを読む',
		progressLabel: '全3問',
		accent: '#e8a33a',
		unlocked: true
	},
	{
		code: '03',
		name: 'インフラ・装置産業',
		description: '固定資産と有利子負債',
		progressLabel: '全3問',
		accent: '#5c5c66',
		unlocked: true
	},
	{
		code: '04',
		name: '世界のラグジュアリー',
		description: '希少性が利益率になる',
		progressLabel: '全3問',
		accent: '#16161a',
		unlocked: true
	}
];
