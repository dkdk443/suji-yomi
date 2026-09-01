<script lang="ts">
	import { useQuizStore } from '../../stores/quiz.svelte';
	import { INDUSTRY_MODES } from '../../data/industries';

	const store = useQuizStore();
</script>

<div class="header">
	<div class="title">業界別モード</div>
</div>
<div class="list">
	{#each INDUSTRY_MODES as industry (industry.code)}
		<button class="item" onclick={() => store.startIndustry(industry.code)}>
			<div
				class="icon"
				class:locked={!industry.unlocked}
				style:background={industry.unlocked ? industry.accent : undefined}
				style:color={industry.unlocked && industry.accent !== '#e8a33a' ? '#fff' : undefined}
			>
				{industry.code}
			</div>
			<div class="body">
				<div class="name">{industry.name}</div>
				<div class="sub">{industry.description}</div>
			</div>
			<div class="prog" class:locked={!industry.unlocked}>{industry.progressLabel}</div>
		</button>
	{/each}
</div>

<style>
	.header {
		margin-top: 2px;
	}
	.title {
		font-size: 12.5px;
		font-weight: 700;
		color: var(--muted);
	}
	.list {
		display: flex;
		flex-direction: column;
		gap: 8px;
		margin-top: 8px;
	}
	.item {
		background: var(--surface);
		border: none;
		border-radius: 15px;
		padding: 13px;
		display: flex;
		align-items: center;
		gap: 12px;
		cursor: pointer;
		text-align: left;
		font-family: inherit;
		transition: background 0.15s;
	}
	.item:hover {
		background: #fffdf7;
	}
	.icon {
		width: 36px;
		height: 36px;
		border-radius: 11px;
		flex: none;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 13px;
		font-weight: 700;
		font-family: var(--font-mono);
		background: var(--surface-soft);
		color: var(--ink);
	}
	.icon.locked {
		background: var(--surface-soft);
		color: var(--muted-2);
	}
	.body {
		flex: 1;
	}
	.name {
		font-size: 13.5px;
		font-weight: 700;
		color: var(--ink);
	}
	.sub {
		font-size: 11px;
		color: var(--muted);
	}
	.prog {
		font-size: 11.5px;
		font-weight: 700;
		font-family: var(--font-mono);
		color: var(--ink);
	}
	.prog.locked {
		color: var(--muted-2);
	}
</style>
