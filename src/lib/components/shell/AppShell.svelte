<script lang="ts">
	import type { Snippet } from 'svelte';
	import SidebarNav from './SidebarNav.svelte';
	import TermPanel from '../terms/TermPanel.svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="shell">
	<SidebarNav />
	<main class="main">
		<div class="inner">
			{@render children()}
		</div>
	</main>
	<TermPanel />
</div>

<style>
	.shell {
		height: 100dvh;
		display: flex;
		align-items: stretch;
		background: var(--surface-soft);
	}
	.main {
		flex: 1;
		overflow-y: auto;
		min-width: 0;
	}
	.inner {
		max-width: 760px;
		margin: 0 auto;
		padding: 40px 32px 64px;
	}
</style>
