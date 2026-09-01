<script lang="ts">
	import Chip from '../ui/Chip.svelte';
	import { useProfileStore } from '../../stores/profile.svelte';
	import { useQuizStore } from '../../stores/quiz.svelte';
	import { LEVELS } from '../../data/levels';

	interface Props {
		total: number;
		correctCount: number;
		questionCount: number;
		hintsUsed: number;
	}

	let { total, correctCount, questionCount, hintsUsed }: Props = $props();
	const profile = useProfileStore();
	const quiz = useQuizStore();

	const dateLabel = new Intl.DateTimeFormat('ja-JP', { month: 'long', day: 'numeric' }).format(
		new Date()
	);
	const rank = $derived(
		correctCount === questionCount
			? '上位4%'
			: correctCount >= questionCount - 1
				? '上位22%'
				: '平均レベル'
	);
</script>

<div class="card">
	<div class="glow"></div>
	<div class="content">
		<div class="eyebrow">RESULT ・ {dateLabel}</div>
		<div class="score">
			<span class="value">{total}</span>
			<span class="unit">pt</span>
		</div>
		<div class="summary">{correctCount}/{questionCount}問正解 ・ {rank}</div>
		<div class="chips">
			<Chip tone="outline" label="連続{profile.streakDays}日" />
			<Chip tone="outline" label="ヒント{hintsUsed}回" />
			<Chip tone="outline" label={LEVELS[quiz.level].label} />
			{#if profile.leveledUpThisSession}
				<span class="chip xp">レベルアップ！Lv.{profile.level}</span>
			{/if}
		</div>
	</div>
</div>

<style>
	.card {
		position: relative;
		overflow: hidden;
		background: var(--ink);
		border-radius: 24px;
		padding: 22px;
		color: #fff;
	}
	.glow {
		position: absolute;
		left: -40px;
		bottom: -50px;
		width: 170px;
		height: 170px;
		border-radius: 50%;
		background: rgba(232, 163, 58, 0.3);
	}
	.content {
		position: relative;
	}
	.eyebrow {
		font-size: 11.5px;
		font-weight: 700;
		letter-spacing: 0.16em;
		color: var(--green);
	}
	.score {
		display: flex;
		align-items: baseline;
		gap: 6px;
		margin-top: 8px;
	}
	.value {
		font-size: 58px;
		font-weight: 900;
		line-height: 1;
		font-family: var(--font-mono);
	}
	.unit {
		font-size: 18px;
		font-weight: 700;
		opacity: 0.6;
	}
	.summary {
		font-size: 14px;
		font-weight: 700;
		margin-top: 6px;
	}
	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin-top: 16px;
	}
	.chip.xp {
		display: inline-flex;
		align-items: center;
		border-radius: 14px;
		padding: 4px 10px;
		font-size: 11.5px;
		font-weight: 700;
		white-space: nowrap;
		border: 1px solid rgba(255, 255, 255, 0.28);
		background: rgba(41, 160, 106, 0.4);
	}
</style>
