<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		padding?: string;
		radius?: string;
		background?: string;
		children: Snippet;
	}

	let {
		padding = '16px',
		radius = '18px',
		background = 'var(--surface)',
		children
	}: Props = $props();
</script>

<div class="card" style:padding style:border-radius={radius} style:background>
	{@render children()}
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
	}
</style>
