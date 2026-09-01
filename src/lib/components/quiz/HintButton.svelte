<script lang="ts">
	import { useQuizStore } from '../../stores/quiz.svelte';
	import { LEVELS } from '../../data/levels';

	const store = useQuizStore();
	const label = $derived(store.hintStage === 1 ? '損益計算書を見る' : '非財務データを見る');
	const cost = $derived(LEVELS[store.level].hintCost);
</script>

{#if store.canRevealHint}
	<button class="hint" onclick={() => store.nextHint()}>
		<span class="label">{label}</span>
		<span class="cost">-{cost}pt</span>
	</button>
{/if}

<style>
	.hint {
		width: 100%;
		border: 1.5px dashed rgba(22, 22, 26, 0.25);
		background: transparent;
		border-radius: 16px;
		height: 46px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		cursor: pointer;
		color: var(--ink);
		font-family: inherit;
		transition: all 0.15s;
	}
	.hint:hover {
		background: #fffdf7;
		border-color: var(--amber);
	}
	.label {
		font-size: 13.5px;
		font-weight: 700;
	}
	.cost {
		font-size: 11.5px;
		color: var(--muted);
		font-family: var(--font-mono);
	}
</style>
