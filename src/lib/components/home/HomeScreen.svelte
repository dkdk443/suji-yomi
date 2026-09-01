<script lang="ts">
	import DailyChallengeCard from './DailyChallengeCard.svelte';
	import LevelProgressCard from './LevelProgressCard.svelte';
	import DifficultySelector from './DifficultySelector.svelte';
	import GlossaryEntryCard from './GlossaryEntryCard.svelte';
	import IndustryModeList from './IndustryModeList.svelte';
	import { DEMO_PROFILE } from '../../data/profile';
	import { useProfileStore } from '../../stores/profile.svelte';

	const profile = useProfileStore();
</script>

<div class="screen">
	<div class="greeting">
		<div class="name">こんばんは、{DEMO_PROFILE.name}さん</div>
		{#if profile.streakDays > 0}
			<div class="streak"><span class="mono">{profile.streakDays}</span>日連続</div>
		{/if}
	</div>

	<DailyChallengeCard />
	<LevelProgressCard />
	<DifficultySelector />
	<GlossaryEntryCard />
	<IndustryModeList />
</div>

<style>
	.screen {
		display: flex;
		flex-direction: column;
		gap: 16px;
		animation: rise 0.35s ease both;
	}
	.greeting {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 6px;
	}
	.name {
		font-size: 20px;
		font-weight: 900;
		letter-spacing: 0.02em;
		color: var(--ink);
	}
	.streak {
		display: flex;
		align-items: center;
		gap: 4px;
		background: var(--ink);
		color: #fff;
		border-radius: 20px;
		padding: 5px 11px;
		font-size: 12px;
		font-weight: 700;
	}
	.mono {
		font-family: var(--font-mono);
	}
</style>
