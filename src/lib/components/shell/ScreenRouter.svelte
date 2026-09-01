<script lang="ts">
	import { useQuizStore } from '../../stores/quiz.svelte';
	import HomeScreen from '../home/HomeScreen.svelte';
	import QuizScreen from '../quiz/QuizScreen.svelte';
	import AnswerScreen from '../answer/AnswerScreen.svelte';
	import ResultScreen from '../result/ResultScreen.svelte';
	import TermsScreen from '../terms/TermsScreen.svelte';

	const store = useQuizStore();
</script>

{#if store.screen === 'home'}
	<HomeScreen />
{:else if store.screen === 'quiz'}
	<QuizScreen />
{:else if store.screen === 'answer'}
	<AnswerScreen />
{:else if store.screen === 'result'}
	<ResultScreen />
{:else if store.screen === 'terms'}
	<TermsScreen />
{/if}
