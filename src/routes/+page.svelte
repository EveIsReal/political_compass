<script lang="ts">
	
	import { score, usedQuestions } from "../stores";
	import { randomIntFromInterval } from "../utils";

	
</script>

<div class="wrapper">
	<p>home</p>
	<!-- <a href={`/${firstQuestion}`} on:click={() => {
		$usedQuestions = [];
		$score = 0;
	}}>
		Start
	</a> -->
	<form method="POST">
		<button type="submit" class="submit">
			Start
		</button>
	</form>
</div>

<style>

	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.submit {
		background-color: rgb(41, 128, 179);
		padding-top: 10px;
		padding-bottom: 10px;
		padding-left: 25px;
		padding-right: 25px;
		text-decoration: none;
		color: white;
		font-size: 31pt;
		border-radius: 10px;
		border: none;
		cursor: pointer;
	}

</style>
