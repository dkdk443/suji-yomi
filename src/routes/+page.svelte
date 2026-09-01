<script lang="ts">
	import { provideQuizStore } from '$lib/stores/quiz.svelte';
	import { provideProfileStore } from '$lib/stores/profile.svelte';
	import PhoneShell from '$lib/components/shell/PhoneShell.svelte';
	import AppShell from '$lib/components/shell/AppShell.svelte';
	import ScreenRouter from '$lib/components/shell/ScreenRouter.svelte';

	const profile = provideProfileStore();
	provideQuizStore(profile);
</script>

<svelte:head>
	<title>スジヨミ ・ 財務諸表当てクイズ</title>
</svelte:head>

<div class="mobile">
	<div class="page">
		<header class="page-head">
			<div class="logo">スジヨミ</div>
			<p class="tagline">財務諸表だけで企業名を当てる、1日1問の学習クイズ。</p>
		</header>

		<PhoneShell>
			<ScreenRouter />
		</PhoneShell>
	</div>
</div>

<div class="desktop">
	<AppShell>
		<ScreenRouter />
	</AppShell>
</div>

<style>
	.mobile {
		display: block;
	}
	.desktop {
		display: none;
	}
	.page {
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 26px;
		padding: 32px 16px;
	}
	.page-head {
		display: flex;
		align-items: baseline;
		gap: 14px;
		max-width: 760px;
		width: 100%;
	}
	.logo {
		font-size: 15px;
		font-weight: 900;
		letter-spacing: 0.14em;
		color: var(--ink);
	}
	.tagline {
		font-size: 12.5px;
		color: var(--muted);
		margin: 0;
	}

	@media (min-width: 881px) {
		.mobile {
			display: none;
		}
		.desktop {
			display: block;
		}
	}
</style>
