<script lang="ts">
	import { useQuizStore } from '../../stores/quiz.svelte';
	import VerdictBanner from './VerdictBanner.svelte';
	import AnswerCard from './AnswerCard.svelte';
	import FocusPointCard from './FocusPointCard.svelte';
	import ReasonList from './ReasonList.svelte';
	import BalanceSheetChart from '../quiz/BalanceSheetChart.svelte';
	import IncomeStatementCard from '../quiz/IncomeStatementCard.svelte';
	import ExtraDataCard from '../quiz/ExtraDataCard.svelte';

	const store = useQuizStore();
	const result = $derived(store.lastResult);
	const question = $derived(store.currentQuestion);
	const nextLabel = $derived(store.isLastQuestion ? '結果を見る' : '次の問題へ');
</script>

{#if result}
	<div class="screen">
		<VerdictBanner correct={result.correct} gained={result.gained} hintsUsed={result.hintsUsed} />
		<AnswerCard answerName={question.answerName} sector={question.sector} />
		<BalanceSheetChart columns={question.columns} totalLabel={question.totalLabel} />
		<IncomeStatementCard incomeStatement={question.incomeStatement} kpis={question.kpis} />
		<ExtraDataCard extra={question.extra} />
		<FocusPointCard point={question.point} />
		<ReasonList reasons={question.reasons} />
		<button class="next" onclick={() => store.next()}>{nextLabel}</button>
	</div>
{/if}

<style>
	.screen {
		display: flex;
		flex-direction: column;
		gap: 13px;
	}
	.next {
		width: 100%;
		background: var(--ink);
		color: #fff;
		border: none;
		border-radius: 16px;
		height: 52px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 15.5px;
		font-weight: 900;
		cursor: pointer;
		font-family: inherit;
		transition: background 0.15s;
	}
	.next:hover {
		background: var(--ink-2);
	}
</style>
