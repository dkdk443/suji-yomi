<script lang="ts">
	interface Props {
		percent: number;
		color?: string;
		track?: string;
		height?: string;
	}

	let { percent, color = 'var(--amber)', track = '#eae5db', height = '9px' }: Props = $props();
</script>

<div class="track" style:height style:background={track}>
	<div
		class="fill"
		style:width={`${Math.min(100, Math.max(0, percent))}%`}
		style:background={color}
	></div>
</div>

<style>
	.track {
		border-radius: 9px;
		overflow: hidden;
		width: 100%;
	}
	.fill {
		height: 100%;
		border-radius: 9px;
		transition: width 0.3s ease;
	}
</style>
