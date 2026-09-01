<script lang="ts">
	interface Props {
		answerName: string;
		sector: string;
	}

	let { answerName, sector }: Props = $props();
</script>

<div class="card">
	<div class="eyebrow">ANSWER</div>
	<div class="name">{answerName}</div>
	<div class="sector">{sector}</div>
</div>

<style>
	.card {
		background: var(--surface);
		border-radius: 18px;
		padding: 16px;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	.eyebrow {
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.14em;
		color: var(--muted-2);
	}
	.name {
		font-size: 24px;
		font-weight: 900;
		color: var(--ink);
	}
	.sector {
		font-size: 12.5px;
		color: var(--muted);
	}
</style>
