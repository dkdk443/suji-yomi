<script lang="ts">
	import { useQuizStore } from '../../stores/quiz.svelte';

	const store = useQuizStore();
</script>

<button class="card" onclick={() => store.goScreen('terms')}>
	<div class="icon">?</div>
	<div class="body">
		<div class="title">用語ガイド ・ 多いとどうなる？</div>
		<div class="sub">
			純資産、有価証券、棚卸資産…。意味だけでなく「多い会社／少ない会社はどうなるか」で覚える。
		</div>
	</div>
	<div class="chevron">›</div>
</button>

<style>
	.card {
		background: var(--surface);
		border: none;
		border-radius: 18px;
		padding: 15px;
		display: flex;
		align-items: center;
		gap: 12px;
		cursor: pointer;
		text-align: left;
		font-family: inherit;
		transition: background 0.15s;
	}
	.card:hover {
		background: #fffdf7;
	}
	.icon {
		width: 38px;
		height: 38px;
		border-radius: 12px;
		background: var(--surface-soft);
		flex: none;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 15px;
		font-weight: 900;
		color: var(--muted);
	}
	.body {
		flex: 1;
	}
	.title {
		font-size: 13.5px;
		font-weight: 700;
		color: var(--ink);
	}
	.sub {
		font-size: 11px;
		line-height: 1.5;
		color: var(--muted);
		margin-top: 2px;
		text-wrap: pretty;
	}
	.chevron {
		font-size: 15px;
		color: rgba(22, 22, 26, 0.3);
	}
</style>
