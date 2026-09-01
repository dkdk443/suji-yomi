<script lang="ts">
	import { useQuizStore } from '../../stores/quiz.svelte';
	import type { Screen } from '../../types';

	const store = useQuizStore();

	const tabs: { screen: Screen; label: string; radius: string }[] = [
		{ screen: 'home', label: 'ホーム', radius: '8px' },
		{ screen: 'quiz', label: 'クイズ', radius: '50%' },
		{ screen: 'terms', label: '用語ガイド', radius: '4px' },
		{ screen: 'result', label: '復習', radius: '30% 30% 4px 30%' }
	];
</script>

<div class="bar">
	{#each tabs as tab (tab.screen)}
		<button
			class="tab"
			class:active={store.screen === tab.screen}
			onclick={() => store.goScreen(tab.screen)}
		>
			<div class="dot" style:border-radius={tab.radius}></div>
			{tab.label}
		</button>
	{/each}
</div>

<style>
	.bar {
		height: 66px;
		border-top: 1px solid rgba(22, 22, 26, 0.08);
		background: #f7f4ee;
		display: flex;
		align-items: center;
		padding: 0 14px 8px;
		flex: none;
	}
	.tab {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 5px;
		font-size: 10.5px;
		font-weight: 700;
		cursor: pointer;
		color: var(--muted-2);
		background: none;
		border: none;
		font-family: inherit;
	}
	.tab.active {
		color: var(--ink);
	}
	.dot {
		width: 22px;
		height: 22px;
		background: rgba(22, 22, 26, 0.25);
	}
	.tab.active .dot {
		background: var(--ink);
	}
</style>
