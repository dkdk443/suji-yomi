export interface Rank {
	name: string;
	minLevel: number;
}

// 読解レベルの節目ごとに称号を付与する。数値はドラフトなので実際のプレイ感に合わせて調整する想定。
export const RANKS: Rank[] = [
	{ name: '見習いアナリスト', minLevel: 1 },
	{ name: 'ジュニアアナリスト', minLevel: 3 },
	{ name: 'アナリスト', minLevel: 6 },
	{ name: 'シニアアナリスト', minLevel: 10 },
	{ name: 'ポートフォリオマネージャー', minLevel: 15 },
	{ name: '財務の目利き', minLevel: 21 }
];

export function rankForLevel(level: number): Rank {
	let current = RANKS[0];
	for (const rank of RANKS) {
		if (level >= rank.minLevel) current = rank;
	}
	return current;
}
