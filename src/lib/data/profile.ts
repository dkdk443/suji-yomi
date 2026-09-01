// ユーザーアカウント機能が無いため、表示名とバッジ名だけ固定値として残す。
// ストリーク・レベル・ポイントは stores/profile.svelte.ts（localStorage永続化）が実データを持つ。
export const DEMO_PROFILE = {
	name: 'ミナト',
	readingLevelTitle: '財務の目',
	nextBadge: 'BS即読み'
};
