<script lang="ts">
	import { useQuizStore } from '../../stores/quiz.svelte';

	const store = useQuizStore();
</script>

<div class="actions">
	<button class="share">結果をシェア</button>
	<button class="home" onclick={() => store.goHome()}>ホームへ</button>
</div>
<p class="note">次の1問は明日の朝6時に更新</p>

<style>
	.actions {
		display: flex;
		gap: 9px;
	}
	button {
		flex: 1;
		border: none;
		border-radius: 16px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14.5px;
		font-weight: 900;
		cursor: pointer;
		font-family: inherit;
		transition: background 0.15s;
	}
	.share {
		background: var(--green);
		color: #fff;
	}
	.share:hover {
		background: var(--green-dark);
	}
	.home {
		background: var(--surface);
		color: var(--ink);
	}
	.home:hover {
		background: #fffdf7;
	}
	.note {
		font-size: 11.5px;
		color: var(--muted-2);
		text-align: center;
		margin: 0;
	}
</style>
