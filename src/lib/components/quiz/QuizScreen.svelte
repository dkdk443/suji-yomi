<script lang="ts">
	import { useQuizStore } from '../../stores/quiz.svelte';
	import { LEVELS } from '../../data/levels';
	import QuizHeader from './QuizHeader.svelte';
	import BalanceSheetChart from './BalanceSheetChart.svelte';
	import IncomeStatementCard from './IncomeStatementCard.svelte';
	import ExtraDataCard from './ExtraDataCard.svelte';
	import HintButton from './HintButton.svelte';
	import ChoiceGrid from './ChoiceGrid.svelte';

	const store = useQuizStore();
</script>

<div class="screen">
	<QuizHeader />

	<div class="title-row">
		<div class="qno">Q{store.questionIndex + 1}</div>
		<div class="question">この会社はどこ？</div>
		<div class="level">{LEVELS[store.level].label}</div>
	</div>

	<BalanceSheetChart
		columns={store.currentQuestion.columns}
		totalLabel={store.currentQuestion.totalLabel}
	/>

	{#if store.showIncomeStatement}
		<IncomeStatementCard
			incomeStatement={store.currentQuestion.incomeStatement}
			kpis={store.currentQuestion.kpis}
		/>
	{/if}

	{#if store.showExtraData}
		<ExtraDataCard extra={store.currentQuestion.extra} />
	{/if}

	<HintButton />
	<ChoiceGrid />
</div>

<style>
	.screen {
		display: flex;
		flex-direction: column;
		gap: 13px;
	}
	.title-row {
		display: flex;
		align-items: baseline;
		gap: 8px;
	}
	.qno {
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.14em;
		color: var(--muted-2);
		font-family: var(--font-mono);
	}
	.question {
		font-size: 17px;
		font-weight: 900;
		color: var(--ink);
	}
	.level {
		margin-left: auto;
		background: var(--surface-soft);
		border-radius: 12px;
		padding: 3px 9px;
		font-size: 11px;
		font-weight: 700;
		color: var(--muted);
	}
</style>
