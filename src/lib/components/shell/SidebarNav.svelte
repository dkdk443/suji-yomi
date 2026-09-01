<script lang="ts">
	import { useQuizStore } from '../../stores/quiz.svelte';
	import type { Screen } from '../../types';

	const store = useQuizStore();

	const tabs: { screen: Screen; label: string; radius: string }[] = [
		{ screen: 'home', label: 'ホーム', radius: '8px' },
		{ screen: 'quiz', label: 'クイズ', radius: '50%' },
		{ screen: 'terms', label: '用語', radius: '4px' },
		{ screen: 'result', label: '復習', radius: '30% 30% 4px 30%' }
	];
</script>

<nav class="rail">
	<div class="mark">ス</div>
	<div class="items">
		{#each tabs as tab (tab.screen)}
			<button
				class="item"
				class:active={store.screen === tab.screen}
				onclick={() => store.goScreen(tab.screen)}
			>
				<div class="dot" style:border-radius={tab.radius}></div>
				<span class="label">{tab.label}</span>
			</button>
		{/each}
	</div>
</nav>

<style>
	.rail {
		width: 76px;
		flex: none;
		background: var(--ink);
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px 8px;
		gap: 22px;
	}
	.mark {
		font-size: 15px;
		font-weight: 900;
		color: #f2efe8;
	}
	.items {
		display: flex;
		flex-direction: column;
		gap: 14px;
		width: 100%;
	}
	.item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 6px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 8px 4px;
		border-radius: 12px;
		font-family: inherit;
		color: rgba(242, 239, 232, 0.45);
		transition: background 0.15s;
	}
	.item:hover {
		background: rgba(242, 239, 232, 0.08);
	}
	.item.active {
		color: #f2efe8;
	}
	.dot {
		width: 22px;
		height: 22px;
		background: rgba(242, 239, 232, 0.25);
	}
	.item.active .dot {
		background: var(--green);
	}
	.label {
		font-size: 10px;
		font-weight: 700;
	}
</style>
