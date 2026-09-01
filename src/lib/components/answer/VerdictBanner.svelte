<script lang="ts">
	interface Props {
		correct: boolean;
		gained: number;
		hintsUsed: number;
	}

	let { correct, gained, hintsUsed }: Props = $props();
</script>

<div class="banner" class:correct class:wrong={!correct}>
	<div class="kicker">{correct ? 'CORRECT' : 'MISS'}</div>
	<div class="title">{correct ? '正解！' : 'おしい！'}</div>
	<div class="detail">+{gained}pt ／ ヒント{hintsUsed}回</div>
</div>

<style>
	.banner {
		border-radius: 22px;
		padding: 20px;
		color: #fff;
		animation: pop 0.4s ease both;
	}
	.banner.correct {
		background: var(--green);
	}
	.banner.wrong {
		background: var(--red);
	}
	.kicker {
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.16em;
		opacity: 0.7;
	}
	.title {
		font-size: 32px;
		font-weight: 900;
		line-height: 1.1;
		margin-top: 4px;
	}
	.detail {
		font-size: 13px;
		font-weight: 700;
		margin-top: 6px;
		font-family: var(--font-mono);
	}
</style>
