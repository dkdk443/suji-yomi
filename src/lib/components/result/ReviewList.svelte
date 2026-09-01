<script lang="ts">
	import type { QuizResult } from '../../types';

	interface Props {
		results: QuizResult[];
	}

	let { results }: Props = $props();
</script>

<div class="card">
	<div class="title">今日の復習リスト</div>
	{#each results as r, i (i)}
		<div class="row">
			<div class="mark" class:correct={r.correct} class:wrong={!r.correct}>
				{r.correct ? '○' : '×'}
			</div>
			<div class="body">
				<div class="name">{r.companyName}</div>
				<div class="tag">{r.tag}</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.card {
		background: var(--surface);
		border-radius: 18px;
		padding: 16px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.title {
		font-size: 12.5px;
		font-weight: 700;
		color: var(--ink);
	}
	.row {
		display: flex;
		align-items: center;
		gap: 10px;
		border-bottom: 1px dashed rgba(22, 22, 26, 0.12);
		padding-bottom: 9px;
	}
	.row:last-child {
		border-bottom: none;
		padding-bottom: 0;
	}
	.mark {
		width: 24px;
		height: 24px;
		border-radius: 50%;
		flex: none;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 13px;
		font-weight: 700;
		color: #fff;
	}
	.mark.correct {
		background: var(--green);
	}
	.mark.wrong {
		background: var(--red);
	}
	.body {
		flex: 1;
	}
	.name {
		font-size: 13.5px;
		font-weight: 700;
		color: var(--ink);
	}
	.tag {
		font-size: 11px;
		color: var(--muted);
	}
</style>
