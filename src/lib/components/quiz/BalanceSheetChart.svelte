<script lang="ts">
	import { findTerm } from '../../data/terms';
	import { useQuizStore } from '../../stores/quiz.svelte';
	import type { BalanceSheetColumn } from '../../types';

	interface Props {
		columns: BalanceSheetColumn[];
		totalLabel: string;
	}

	let { columns, totalLabel }: Props = $props();
	const store = useQuizStore();

	const BAR_HEIGHT = 196;
	/** これより低いブロックは文字が収まらないので中のラベルを省略する */
	const MIN_LABEL_HEIGHT = 16;

	// 貸借対照表は資産合計＝負債・純資産合計になるため、資産列の合計を両列の%計算に使い回す
	const total = $derived(columns[0].segments.reduce((sum, s) => sum + s.value, 0));

	function segmentRadius(index: number, count: number): string {
		const first = index === 0;
		const last = index === count - 1;
		return `${first ? '8px 8px' : '0 0'} ${last ? '8px 8px' : '0 0'}`;
	}

	function percent(value: number): number {
		return (value / total) * 100;
	}

	function pixelHeight(value: number): number {
		return (percent(value) / 100) * BAR_HEIGHT;
	}

	function percentLabel(value: number): string {
		return `${Math.round(percent(value))}%`;
	}
</script>

<div class="chart">
	<div class="head">
		<div class="head-left">
			<div class="title">貸借対照表の構成</div>
			<div class="hint">タップで用語解説</div>
		</div>
		<div class="total">総資産 {totalLabel}</div>
	</div>
	<div class="columns">
		{#each columns as col (col.title)}
			<div class="column">
				<div class="col-title">{col.title}</div>
				<div class="stack">
					{#each col.segments as seg, i (seg.label)}
						{@const term = findTerm(seg.label)}
						{@const showLabel = pixelHeight(seg.value) >= MIN_LABEL_HEIGHT}
						<div
							class="segment"
							class:clickable={!!term}
							style:height={`max(2px, ${percent(seg.value)}%)`}
							style:background={seg.color}
							style:border-radius={segmentRadius(i, col.segments.length)}
							role={term ? 'button' : undefined}
							tabindex={term ? 0 : undefined}
							aria-label={term && !showLabel
								? `${seg.label} ${percentLabel(seg.value)}`
								: undefined}
							onclick={term ? () => store.openTerm(term) : undefined}
							onkeydown={term
								? (e) => {
										if (e.key === 'Enter' || e.key === ' ') {
											e.preventDefault();
											store.openTerm(term);
										}
									}
								: undefined}
						>
							{#if showLabel}
								<span class="label">{seg.label}</span>
								<span class="right">
									<span class="pct">{percentLabel(seg.value)}</span>
									{#if term}<span class="mark">?</span>{/if}
								</span>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.chart {
		background: var(--surface);
		border-radius: 18px;
		padding: 15px 15px 13px;
	}
	.head {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		margin-bottom: 11px;
	}
	.head-left {
		display: flex;
		align-items: baseline;
		gap: 7px;
	}
	.title {
		font-size: 12px;
		font-weight: 700;
		color: var(--ink);
	}
	.hint {
		font-size: 10px;
		font-weight: 700;
		color: rgba(22, 22, 26, 0.38);
	}
	.total {
		font-size: 10.5px;
		color: rgba(22, 22, 26, 0.45);
		font-family: var(--font-mono);
	}
	.columns {
		display: flex;
		gap: 10px;
		height: 196px;
	}
	.column {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 6px;
		height: 100%;
	}
	.col-title {
		font-size: 10.5px;
		font-weight: 700;
		color: var(--muted);
		text-align: center;
	}
	.stack {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 1px;
		transform-origin: top;
		animation: grow 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) both;
	}
	.segment {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 8px;
		font-size: 10.5px;
		font-weight: 700;
		overflow: hidden;
		white-space: nowrap;
		color: #fff;
		border: none;
		width: 100%;
		font-family: inherit;
		cursor: default;
	}
	.segment.clickable {
		cursor: pointer;
	}
	.label {
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.right {
		display: flex;
		align-items: center;
		gap: 5px;
		flex: none;
	}
	.pct {
		font-family: var(--font-mono);
		opacity: 0.75;
	}
	.mark {
		font-size: 8.5px;
		font-weight: 700;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		border: 1px solid rgba(255, 255, 255, 0.55);
		display: flex;
		align-items: center;
		justify-content: center;
		flex: none;
		opacity: 0.85;
	}
</style>
