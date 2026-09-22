<script lang="ts">
	import { useProfileStore } from '../../stores/profile.svelte';

	const profile = useProfileStore();
</script>

{#if profile.rankedUpThisSession}
	<div class="banner">
		<div class="eyebrow">RANK UP</div>
		<div class="transition">
			{#if profile.previousRankName}
				<span class="from">{profile.previousRankName}</span>
				<span class="arrow">→</span>
			{/if}
			<span class="to">{profile.rank.name}</span>
		</div>
		<p class="note">称号が上がりました。この調子で読解レベルを伸ばしていきましょう。</p>
	</div>
{/if}

<style>
	.banner {
		background: var(--amber);
		border-radius: 22px;
		padding: 20px;
		animation: pop 0.4s ease both;
	}
	.eyebrow {
		font-size: 11.5px;
		font-weight: 700;
		letter-spacing: 0.16em;
		color: rgba(22, 22, 26, 0.55);
	}
	.transition {
		display: flex;
		align-items: baseline;
		flex-wrap: wrap;
		gap: 8px;
		margin-top: 6px;
	}
	.from {
		font-size: 14px;
		font-weight: 700;
		color: rgba(22, 22, 26, 0.5);
		text-decoration: line-through;
	}
	.arrow {
		font-size: 14px;
		color: rgba(22, 22, 26, 0.45);
	}
	.to {
		font-size: 22px;
		font-weight: 900;
		color: var(--ink);
	}
	.note {
		font-size: 12.5px;
		line-height: 1.6;
		color: rgba(22, 22, 26, 0.65);
		margin: 8px 0 0;
	}
</style>
