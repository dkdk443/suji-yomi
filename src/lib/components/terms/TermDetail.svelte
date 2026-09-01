<script lang="ts">
	import type { Term } from '../../types';

	interface Props {
		term: Term;
	}

	let { term }: Props = $props();
</script>

<div class="heading">
	<div class="title">{term.title}</div>
	<div class="en">{term.enName}</div>
</div>
<div class="definition">{term.definition}</div>
<div class="meta-chip">たとえるなら「{term.metaphor}」</div>
<div class="meta-line">{term.metaphorLine}</div>

<div class="detail-card">
	<div class="detail-head">
		<div class="icon up">↑</div>
		<div class="detail-title">{term.moreHeading}</div>
	</div>
	<div class="detail-row">
		<span class="badge good">強み</span>
		<span class="detail-text">{term.moreGood}</span>
	</div>
	<div class="detail-row divider">
		<span class="badge cost">代償</span>
		<span class="detail-text">{term.moreBad}</span>
	</div>
</div>

<div class="detail-card">
	<div class="detail-head">
		<div class="icon down">↓</div>
		<div class="detail-title">{term.lessHeading}</div>
	</div>
	<div class="detail-row">
		<span class="badge good">強み</span>
		<span class="detail-text">{term.lessGood}</span>
	</div>
	<div class="detail-row divider">
		<span class="badge risk">危うさ</span>
		<span class="detail-text">{term.lessBad}</span>
	</div>
</div>

<div class="spot-card">
	<div class="spot-eyebrow">クイズでの見どころ</div>
	<div class="spot-text">{term.quizSpot}</div>
</div>

<style>
	.heading {
		display: flex;
		align-items: baseline;
		gap: 9px;
	}
	.title {
		font-size: 22px;
		font-weight: 900;
		color: var(--ink);
	}
	.en {
		font-size: 10.5px;
		color: var(--muted-2);
		font-family: var(--font-mono);
	}
	.definition {
		font-size: 13.5px;
		line-height: 1.65;
		color: rgba(22, 22, 26, 0.8);
		text-wrap: pretty;
	}
	.meta-chip {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		background: var(--surface-soft);
		border-radius: 20px;
		padding: 5px 12px;
		font-size: 11.5px;
		font-weight: 700;
		color: var(--muted);
		align-self: flex-start;
	}
	.meta-line {
		font-size: 12.5px;
		line-height: 1.6;
		color: var(--muted);
		text-wrap: pretty;
	}
	.detail-card {
		background: var(--surface);
		border-radius: 18px;
		padding: 15px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-top: 2px;
	}
	.detail-head {
		display: flex;
		align-items: center;
		gap: 8px;
	}
	.icon {
		width: 22px;
		height: 22px;
		border-radius: 7px;
		color: #fff;
		font-size: 13px;
		font-weight: 900;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.icon.up {
		background: var(--green);
	}
	.icon.down {
		background: #8a8a92;
	}
	.detail-title {
		font-size: 13.5px;
		font-weight: 900;
		color: var(--ink);
	}
	.detail-row {
		display: flex;
		gap: 9px;
		align-items: flex-start;
	}
	.detail-row.divider {
		border-top: 1px dashed rgba(22, 22, 26, 0.12);
		padding-top: 10px;
	}
	.badge {
		font-size: 11px;
		font-weight: 700;
		border-radius: 8px;
		padding: 2px 7px;
		flex: none;
		margin-top: 1px;
	}
	.badge.good {
		color: #1f7a55;
		background: #dff0e6;
	}
	.badge.cost {
		color: #a35c14;
		background: #f8ead2;
	}
	.badge.risk {
		color: #b23a2a;
		background: #fadcd6;
	}
	.detail-text {
		font-size: 12.5px;
		line-height: 1.6;
		color: rgba(22, 22, 26, 0.78);
		text-wrap: pretty;
	}
	.spot-card {
		background: var(--amber);
		border-radius: 18px;
		padding: 15px;
	}
	.spot-eyebrow {
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.14em;
		color: rgba(22, 22, 26, 0.55);
	}
	.spot-text {
		font-size: 13px;
		font-weight: 700;
		line-height: 1.6;
		color: var(--ink);
		margin-top: 5px;
		text-wrap: pretty;
	}
</style>
