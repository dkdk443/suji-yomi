<script lang="ts">
	interface Props {
		reasons: string[];
	}

	let { reasons }: Props = $props();
</script>

<div class="card">
	<div class="title">この数字が特徴的な理由</div>
	{#each reasons as reason, i (reason)}
		<div class="reason">
			<div class="badge">{i + 1}</div>
			<div class="text">{reason}</div>
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
		gap: 12px;
	}
	.title {
		font-size: 12.5px;
		font-weight: 700;
		color: var(--ink);
	}
	.reason {
		display: flex;
		gap: 10px;
		align-items: flex-start;
	}
	.badge {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: var(--ink);
		color: #fff;
		font-size: 11px;
		font-weight: 700;
		display: flex;
		align-items: center;
		justify-content: center;
		flex: none;
		margin-top: 1px;
		font-family: var(--font-mono);
	}
	.text {
		font-size: 13px;
		line-height: 1.6;
		color: rgba(22, 22, 26, 0.78);
		text-wrap: pretty;
	}
</style>
