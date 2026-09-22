<script lang="ts">
	import type { Snippet } from 'svelte';
	import SidebarNav from './SidebarNav.svelte';
	import TermPanel from '../terms/TermPanel.svelte';
	import { useQuizStore } from '../../stores/quiz.svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
	const store = useQuizStore();
	let mainEl: HTMLElement | undefined = $state();

	// 画面が切り替わるたびにスクロール位置を先頭へ戻す（前の画面の途中位置を引き継がないように）
	$effect(() => {
		void store.screen;
		mainEl?.scrollTo(0, 0);
	});
</script>

<div class="shell">
	<SidebarNav />
	<main class="main" bind:this={mainEl}>
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
