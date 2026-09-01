<script lang="ts">
	import Card from '../ui/Card.svelte';
	import ProgressBar from '../ui/ProgressBar.svelte';
	import { DEMO_PROFILE } from '../../data/profile';
	import { useProfileStore } from '../../stores/profile.svelte';

	const profile = useProfileStore();
	const percent = $derived(Math.round((profile.levelPoints / profile.levelTarget) * 100));
	const remaining = $derived(profile.levelTarget - profile.levelPoints);
</script>

<Card>
	<div class="row">
		<div class="label">読解レベル {profile.level} ・ {DEMO_PROFILE.readingLevelTitle}</div>
		<div class="pt"><span class="mono">{profile.levelPoints}</span> / {profile.levelTarget} pt</div>
	</div>
	<div class="bar"><ProgressBar {percent} /></div>
	<div class="hint">
		あと<span class="mono">{remaining}</span>ptで「{DEMO_PROFILE.nextBadge}」バッジ
	</div>
</Card>

<style>
	.row {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}
	.label {
		font-size: 13px;
		font-weight: 700;
		color: var(--ink);
	}
	.pt {
		font-size: 11.5px;
		color: var(--muted);
	}
	.mono {
		font-family: var(--font-mono);
	}
	.bar {
		margin-top: 11px;
	}
	.hint {
		font-size: 11.5px;
		color: var(--muted);
		margin-top: 11px;
	}
</style>
