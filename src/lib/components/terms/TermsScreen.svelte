<script lang="ts">
	import { TERMS } from '../../data/terms';
	import type { TermGroup } from '../../types';
	import TermListItem from './TermListItem.svelte';

	const GROUPS: { title: string; key: TermGroup }[] = [
		{ title: 'BSの左 ・ 持っているもの', key: 'left' },
		{ title: 'BSの右 ・ お金の出どころ', key: 'right' },
		{ title: '数字のクセを測る指標', key: 'kpi' }
	];

	const groups = GROUPS.map((g) => ({
		title: g.title,
		items: TERMS.filter((t) => t.group === g.key)
	}));
</script>

<div class="screen">
	<div class="head">
		<div class="title">用語ガイド</div>
		<p class="lead">
			意味だけ覚えても数字は読めません。「多い会社はどうなるか、少ない会社はどうなるか」をセットで。
		</p>
	</div>

	<div class="example">
		<div class="eyebrow">たとえば</div>
		<div class="text">
			純資産が厚い会社は、筋肉質で不況に強い。でもお金を寝かせがちで、稼ぐ効率は落ちる。<br
			/>薄い会社は伸びが速いかわりに、風邪をひくと一気に寝込む。
		</div>
	</div>

	{#each groups as group (group.title)}
		<div class="group">
			<div class="group-title">{group.title}</div>
			{#each group.items as term (term.title)}
				<TermListItem {term} />
			{/each}
		</div>
	{/each}

	<div class="footnote">出題中の貸借対照表のブロックをタップしても、その用語を開けます</div>
</div>

<style>
	.screen {
		display: flex;
		flex-direction: column;
		gap: 14px;
		animation: rise 0.3s ease both;
	}
	.head {
		padding-top: 8px;
	}
	.title {
		font-size: 20px;
		font-weight: 900;
		color: var(--ink);
	}
	.lead {
		font-size: 11.5px;
		line-height: 1.6;
		color: var(--muted);
		margin: 5px 0 0;
		text-wrap: pretty;
	}
	.example {
		background: var(--ink);
		border-radius: 18px;
		padding: 15px;
		color: #fff;
	}
	.eyebrow {
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.14em;
		color: var(--amber);
	}
	.text {
		font-size: 14px;
		font-weight: 700;
		line-height: 1.6;
		margin-top: 6px;
		text-wrap: pretty;
	}
	.group {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.group-title {
		font-size: 11.5px;
		font-weight: 700;
		color: var(--muted);
		letter-spacing: 0.04em;
	}
	.footnote {
		font-size: 10.5px;
		color: var(--muted-2);
		text-align: center;
		padding-bottom: 4px;
	}
</style>
