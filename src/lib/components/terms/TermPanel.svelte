<script lang="ts">
	import { fly } from 'svelte/transition';
	import { useQuizStore } from '../../stores/quiz.svelte';
	import TermDetail from './TermDetail.svelte';

	const store = useQuizStore();
	const term = $derived(store.sheetTerm);
</script>

{#if term}
	<div class="panel" transition:fly={{ x: 40, duration: 200 }}>
		<div class="head">
			<div class="eyebrow">用語パネル</div>
			<button class="close-x" aria-label="閉じる" onclick={() => store.closeSheet()}>×</button>
		</div>
		<TermDetail {term} />
	</div>
{/if}

<style>
	.panel {
		width: 340px;
		flex: none;
		background: var(--surface);
		border-left: 1px solid var(--line);
		padding: 20px 18px 26px;
		display: flex;
		flex-direction: column;
		gap: 11px;
		overflow-y: auto;
	}
	.head {
		display: flex;
		align-items: center;
	}
	.eyebrow {
		font-size: 10.5px;
		font-weight: 700;
		letter-spacing: 0.14em;
		color: var(--muted-2);
	}
	.close-x {
		margin-left: auto;
		background: none;
		border: none;
		font-size: 17px;
		line-height: 1;
		color: var(--muted-2);
		cursor: pointer;
		padding: 2px;
	}
	.close-x:hover {
		color: var(--ink);
	}
</style>
