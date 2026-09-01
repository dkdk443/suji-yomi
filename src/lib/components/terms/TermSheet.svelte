<script lang="ts">
	import { useQuizStore } from '../../stores/quiz.svelte';
	import TermDetail from './TermDetail.svelte';

	const store = useQuizStore();
	const term = $derived(store.sheetTerm);
</script>

{#if term}
	<div class="overlay">
		<button class="backdrop" aria-label="閉じる" onclick={() => store.closeSheet()}></button>
		<div class="sheet">
			<div class="handle"></div>
			<TermDetail {term} />
			<button class="close" onclick={() => store.closeSheet()}>閉じる</button>
		</div>
	</div>
{/if}

<style>
	.overlay {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: flex-end;
		z-index: 30;
	}
	.backdrop {
		position: absolute;
		inset: 0;
		background: rgba(22, 22, 26, 0.5);
		border: none;
		padding: 0;
		cursor: pointer;
	}
	.sheet {
		position: relative;
		width: 100%;
		max-height: 84%;
		overflow: auto;
		background: #f7f4ee;
		border-radius: 26px 26px 40px 40px;
		padding: 18px 18px 26px;
		display: flex;
		flex-direction: column;
		gap: 12px;
		animation: rise 0.28s cubic-bezier(0.2, 0.8, 0.2, 1) both;
	}
	.handle {
		width: 38px;
		height: 4px;
		border-radius: 4px;
		background: rgba(22, 22, 26, 0.18);
		align-self: center;
	}
	.close {
		background: var(--ink);
		color: #fff;
		border: none;
		border-radius: 16px;
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14.5px;
		font-weight: 900;
		cursor: pointer;
		margin-top: 2px;
		font-family: inherit;
		transition: background 0.15s;
	}
	.close:hover {
		background: var(--ink-2);
	}
</style>
