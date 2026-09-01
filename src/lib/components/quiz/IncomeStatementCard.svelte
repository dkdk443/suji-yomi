<script lang="ts">
	import StatBar from '../ui/StatBar.svelte';
	import { findTerm } from '../../data/terms';
	import { useQuizStore } from '../../stores/quiz.svelte';
	import type { KPIItem, LabeledValue } from '../../types';

	interface Props {
		incomeStatement: LabeledValue[];
		kpis: KPIItem[];
	}

	let { incomeStatement, kpis }: Props = $props();
	const store = useQuizStore();
</script>

<div class="card">
	<div class="title">損益計算書のポイント</div>
	<div class="rows">
		{#each incomeStatement as row (row.label)}
			<div class="row">
				<span class="k">{row.label}</span>
				<span class="v">{row.value}</span>
			</div>
		{/each}
	</div>
	<div class="kpis">
		{#each kpis as kpi (kpi.label)}
			{@const term = findTerm(kpi.label)}
			<StatBar
				label={kpi.label}
				value={kpi.value}
				percent={kpi.percent}
				color={kpi.color}
				onClick={term ? () => store.openTerm(term) : undefined}
			/>
		{/each}
	</div>
</div>

<style>
	.card {
		background: var(--surface);
		border-radius: 18px;
		padding: 15px;
		animation: rise 0.3s ease both;
	}
	.title {
		font-size: 12px;
		font-weight: 700;
		color: var(--ink);
		margin-bottom: 9px;
	}
	.rows {
		display: flex;
		flex-direction: column;
		gap: 7px;
	}
	.row {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		border-bottom: 1px dashed rgba(22, 22, 26, 0.12);
		padding-bottom: 5px;
	}
	.k {
		font-size: 12.5px;
		color: var(--muted);
	}
	.v {
		font-size: 14px;
		font-weight: 700;
		font-family: var(--font-mono);
		color: var(--ink);
	}
	.kpis {
		display: flex;
		gap: 7px;
		margin-top: 11px;
	}
</style>
