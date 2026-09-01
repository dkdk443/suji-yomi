<script lang="ts">
	import type { LabeledValue } from '../../types';

	interface Props {
		extra: LabeledValue[];
	}

	let { extra }: Props = $props();
</script>

<div class="card">
	<div class="title">非財務データ</div>
	<div class="grid">
		{#each extra as row (row.label)}
			<div class="item">
				<div class="k">{row.label}</div>
				<div class="v">{row.value}</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.card {
		background: var(--surface);
		border-radius: 18px;
		padding: 15px;
		animation: rise 0.3s ease both;
	}
	.title {
		font-size: 12px;
		font-weight: 700;
		color: var(--ink);
		margin-bottom: 9px;
	}
	.grid {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
	.item {
		background: var(--surface-soft);
		border-radius: 12px;
		padding: 8px 11px;
	}
	.k {
		font-size: 10.5px;
		color: var(--muted);
	}
	.v {
		font-size: 13.5px;
		font-weight: 700;
		font-family: var(--font-mono);
		color: var(--ink);
	}
</style>
