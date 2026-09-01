<script lang="ts">
	import ProgressBar from './ProgressBar.svelte';

	interface Props {
		label: string;
		value: string;
		percent: number;
		color: string;
		onClick?: () => void;
	}

	let { label, value, percent, color, onClick }: Props = $props();
</script>

<div
	class="stat"
	class:clickable={!!onClick}
	role={onClick ? 'button' : undefined}
	tabindex={onClick ? 0 : undefined}
	onclick={onClick}
	onkeydown={onClick
		? (e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					onClick();
				}
			}
		: undefined}
>
	<div class="label">{label}</div>
	<div class="value">{value}</div>
	<div class="bar"><ProgressBar {percent} {color} track="#e5dfd2" height="4px" /></div>
</div>

<style>
	.stat {
		flex: 1;
		background: var(--surface-soft);
		border-radius: 11px;
		padding: 8px 9px;
		border: none;
		text-align: left;
		font-family: inherit;
		display: block;
		cursor: default;
		transition: background 0.15s;
	}
	.stat.clickable {
		cursor: pointer;
	}
	.stat.clickable:hover {
		background: #efe9dc;
	}
	.label {
		font-size: 9.5px;
		color: var(--muted);
	}
	.value {
		font-size: 15px;
		font-weight: 700;
		font-family: var(--font-mono);
		color: var(--ink);
	}
	.bar {
		margin-top: 5px;
	}
</style>
