<script lang="ts">
	import { useQuizStore } from '../../stores/quiz.svelte';
	import type { Term } from '../../types';

	interface Props {
		term: Term;
	}

	let { term }: Props = $props();
	const store = useQuizStore();
</script>

<button class="item" onclick={() => store.openTerm(term)}>
	<div class="row">
		<div class="title">{term.title}</div>
		<div class="badge">{term.metaphor}</div>
		<div class="chevron">›</div>
	</div>
	<div class="one">{term.definition}</div>
</button>

<style>
	.item {
		background: var(--surface);
		border: none;
		border-radius: 15px;
		padding: 13px;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		gap: 4px;
		text-align: left;
		font-family: inherit;
		transition: background 0.15s;
	}
	.item:hover {
		background: #fffdf7;
	}
	.row {
		display: flex;
		align-items: center;
		gap: 8px;
	}
	.title {
		font-size: 13.5px;
		font-weight: 700;
		color: var(--ink);
	}
	.badge {
		background: var(--surface-soft);
		border-radius: 10px;
		padding: 2px 8px;
		font-size: 10px;
		font-weight: 700;
		color: var(--muted);
	}
	.chevron {
		margin-left: auto;
		font-size: 14px;
		color: rgba(22, 22, 26, 0.28);
	}
	.one {
		font-size: 11px;
		line-height: 1.55;
		color: var(--muted);
		text-wrap: pretty;
	}
</style>
