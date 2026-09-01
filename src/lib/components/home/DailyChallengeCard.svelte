<script lang="ts">
	import { useQuizStore } from '../../stores/quiz.svelte';
	import { QUESTIONS } from '../../data/questions';

	const store = useQuizStore();
</script>

<div class="hero">
	<div class="glow"></div>
	<div class="content">
		<div class="eyebrow">QUIZ</div>
		<div class="title">今日の1問<br />数字だけで当てる。</div>
		<div class="meta">
			<span class="pill">全{QUESTIONS.length}問</span>
			<span class="pill">約3分</span>
			<span class="pill">ヒント制</span>
		</div>
		<button class="start" onclick={() => store.start()}>はじめる</button>
	</div>
</div>

<style>
	.hero {
		position: relative;
		overflow: hidden;
		background: var(--ink);
		border-radius: 22px;
		padding: 20px;
		color: #fff;
	}
	.glow {
		position: absolute;
		right: -30px;
		top: -30px;
		width: 150px;
		height: 150px;
		border-radius: 50%;
		background: rgba(41, 160, 106, 0.35);
	}
	.content {
		position: relative;
	}
	.eyebrow {
		font-size: 11.5px;
		font-weight: 700;
		letter-spacing: 0.16em;
		color: var(--amber);
	}
	.title {
		font-size: 26px;
		font-weight: 900;
		line-height: 1.25;
		margin-top: 8px;
	}
	.meta {
		display: flex;
		gap: 8px;
		margin-top: 14px;
		font-size: 11.5px;
		color: rgba(255, 255, 255, 0.7);
	}
	.pill {
		border: 1px solid rgba(255, 255, 255, 0.3);
		border-radius: 14px;
		padding: 3px 10px;
	}
	.start {
		width: 100%;
		margin-top: 18px;
		background: var(--green);
		color: #fff;
		border: none;
		border-radius: 16px;
		height: 52px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 16px;
		font-weight: 900;
		letter-spacing: 0.04em;
		cursor: pointer;
		font-family: inherit;
		transition: background 0.15s;
	}
	.start:hover {
		background: var(--green-dark);
	}
</style>
