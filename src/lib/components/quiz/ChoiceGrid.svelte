<script lang="ts">
	import { useQuizStore } from '../../stores/quiz.svelte';

	const store = useQuizStore();
</script>

<div class="grid">
	{#each store.currentChoiceSet.choices as choice, i (choice)}
		<button
			class="choice"
			class:correct={store.picked !== null && i === store.currentChoiceSet.correctIndex}
			class:wrong={store.picked === i && i !== store.currentChoiceSet.correctIndex}
			class:dim={store.picked !== null &&
				store.picked !== i &&
				i !== store.currentChoiceSet.correctIndex}
			disabled={store.picked !== null}
			onclick={() => store.pick(i)}
		>
			{choice}
		</button>
	{/each}
</div>
<p class="footnote">数値は公表決算をもとに簡略化しています</p>

<style>
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 9px;
		margin-top: 2px;
	}
	.choice {
		background: var(--surface);
		border: 1.5px solid rgba(22, 22, 26, 0.12);
		color: var(--ink);
		border-radius: 14px;
		min-height: 58px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 8px 10px;
		font-size: 13.5px;
		font-weight: 700;
		line-height: 1.35;
		cursor: pointer;
		transition: all 0.2s;
		font-family: inherit;
	}
	.choice:not(:disabled):hover {
		border-color: var(--ink);
	}
	.choice.correct {
		background: var(--green);
		border-color: var(--green);
		color: #fff;
	}
	.choice.wrong {
		background: var(--red);
		border-color: var(--red);
		color: #fff;
	}
	.choice.dim {
		color: var(--muted-2);
	}
	.choice:disabled {
		cursor: default;
	}
	.footnote {
		font-size: 10.5px;
		color: var(--muted-2);
		text-align: center;
		padding-top: 2px;
		margin: 0;
	}
</style>
