<script lang="ts">
	import { useQuizStore } from '../../stores/quiz.svelte';
	import RankUpBanner from './RankUpBanner.svelte';
	import ResultSummaryCard from './ResultSummaryCard.svelte';
	import ReviewList from './ReviewList.svelte';
	import ShareActions from './ShareActions.svelte';

	const store = useQuizStore();
	const hintsUsed = $derived(store.results.reduce((sum, r) => sum + r.hintsUsed, 0));
</script>

<div class="screen">
	<RankUpBanner />
	<ResultSummaryCard
		total={store.totalPoints}
		correctCount={store.correctCount}
		questionCount={store.questionPool.length}
		{hintsUsed}
	/>
	<ReviewList results={store.results} />
	<ShareActions />
</div>

<style>
	.screen {
		display: flex;
		flex-direction: column;
		gap: 14px;
		animation: pop 0.35s ease both;
	}
</style>
