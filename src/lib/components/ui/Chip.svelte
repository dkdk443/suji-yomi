<script lang="ts">
	interface Props {
		label: string;
		tone?: 'default' | 'dark' | 'outline';
	}

	let { label, tone = 'default' }: Props = $props();
</script>

<span class="chip" class:dark={tone === 'dark'} class:outline={tone === 'outline'}>{label}</span>

<style>
	.chip {
		display: inline-flex;
		align-items: center;
		border-radius: 14px;
		padding: 3px 10px;
		font-size: 11.5px;
		font-weight: 700;
		background: var(--surface-soft);
		color: var(--muted);
		white-space: nowrap;
		flex: none;
	}
	.chip.dark {
		background: var(--ink);
		color: #fff;
	}
	.chip.outline {
		background: transparent;
		border: 1px solid rgba(255, 255, 255, 0.3);
		color: inherit;
	}
</style>
