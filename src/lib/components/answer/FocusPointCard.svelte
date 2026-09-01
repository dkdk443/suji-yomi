<script lang="ts">
	interface Props {
		point: string;
	}

	let { point }: Props = $props();
</script>

<div class="card">
	<div class="eyebrow">ここに注目</div>
	<div class="text">{point}</div>
</div>

<style>
	.card {
		background: var(--amber);
		border-radius: 18px;
		padding: 16px;
	}
	.eyebrow {
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.14em;
		color: rgba(22, 22, 26, 0.55);
	}
	.text {
		font-size: 14.5px;
		font-weight: 700;
		line-height: 1.55;
		color: var(--ink);
		margin-top: 5px;
		text-wrap: pretty;
	}
</style>
