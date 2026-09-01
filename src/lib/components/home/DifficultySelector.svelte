<script lang="ts">
	import Card from '../ui/Card.svelte';
	import { useQuizStore } from '../../stores/quiz.svelte';
	import { LEVELS, LEVEL_ORDER } from '../../data/levels';

	const store = useQuizStore();
</script>

<Card>
	<div class="title">難易度</div>
	<div class="segment">
		{#each LEVEL_ORDER as level (level)}
			<button
				class="option"
				class:active={store.level === level}
				onclick={() => store.setLevel(level)}
			>
				{LEVELS[level].label}
			</button>
		{/each}
	</div>
	<div class="sub">{LEVELS[store.level].description}</div>
</Card>

<style>
	.title {
		font-size: 12.5px;
		font-weight: 700;
		color: var(--ink);
	}
	.segment {
		display: flex;
		gap: 7px;
		background: var(--surface-soft);
		border-radius: 13px;
		padding: 4px;
		margin-top: 10px;
	}
	.option {
		flex: 1;
		height: 38px;
		border: none;
		border-radius: 11px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 13px;
		font-weight: 700;
		font-family: inherit;
		cursor: pointer;
		background: var(--surface);
		color: var(--muted);
		transition: all 0.15s;
	}
	.option.active {
		background: var(--ink);
		color: #fff;
	}
	.sub {
		font-size: 11.5px;
		line-height: 1.6;
		color: var(--muted);
		text-wrap: pretty;
		margin-top: 10px;
	}
</style>
