<script lang="ts">
	import { useQuizStore } from '../../stores/quiz.svelte';

	const store = useQuizStore();
</script>

<div class="row">
	<button class="quit" onclick={() => store.goHome()}>やめる</button>
	<div class="pips">
		{#each store.questionPool as _q, i (i)}
			<div
				class="pip"
				class:active={i === store.questionIndex}
				class:done={i <= store.questionIndex}
			></div>
		{/each}
	</div>
	<div class="pt">{store.potentialPoints}pt</div>
</div>

<style>
	.row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 4px;
	}
	.quit {
		background: none;
		border: none;
		font-size: 13px;
		font-weight: 700;
		color: var(--muted);
		cursor: pointer;
		font-family: inherit;
		padding: 0;
	}
	.pips {
		display: flex;
		gap: 4px;
		align-items: center;
	}
	.pip {
		width: 7px;
		height: 7px;
		border-radius: 7px;
		background: rgba(22, 22, 26, 0.2);
		transition: all 0.3s;
	}
	.pip.active {
		width: 18px;
	}
	.pip.done {
		background: var(--ink);
	}
	.pt {
		font-size: 12px;
		font-weight: 700;
		font-family: var(--font-mono);
		color: var(--ink);
	}
</style>
