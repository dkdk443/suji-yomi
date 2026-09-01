<script lang="ts">
	import type { Snippet } from 'svelte';
	import TabBar from './TabBar.svelte';
	import TermSheet from '../terms/TermSheet.svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="phone">
	<div class="status-bar">
		<div>9:41</div>
		<div class="icons">
			<div class="signal"></div>
			<div class="battery"></div>
		</div>
	</div>
	<div class="content">
		{@render children()}
	</div>
	<TabBar />
	<TermSheet />
</div>

<style>
	.phone {
		width: 390px;
		height: 844px;
		border: 11px solid var(--ink);
		border-radius: 50px;
		background: #f7f4ee;
		box-shadow: 0 30px 60px -20px rgba(22, 22, 26, 0.45);
		position: relative;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		flex: none;
	}
	.status-bar {
		height: 46px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 26px 0 30px;
		flex: none;
		font-size: 12.5px;
		font-weight: 700;
		color: var(--ink);
	}
	.icons {
		display: flex;
		gap: 5px;
		align-items: center;
	}
	.signal {
		width: 16px;
		height: 9px;
		border: 1.5px solid var(--ink);
		border-radius: 2px;
	}
	.battery {
		width: 22px;
		height: 9px;
		background: var(--ink);
		border-radius: 2px;
	}
	.content {
		flex: 1;
		overflow: auto;
		padding: 0 20px 18px;
		display: flex;
		flex-direction: column;
	}
	@media (max-width: 460px) {
		.phone {
			width: 100%;
			height: 100dvh;
			border-width: 0;
			border-radius: 0;
			box-shadow: none;
		}
	}
</style>
