<script lang="ts">
	import questions from '../../questions.json';
	import { score, usedQuestions } from '../../stores';
	import { sumOfDigits } from '../../utils';
	import type { PageData } from './$types';
	export let data: PageData;

	const question = questions[data.id].question;
	const choices = questions[data.id].choices;

	let answer = -1;
	let isSelected: boolean;

	$: isSelected = answer != -1;
</script>

<div class="wrapper">
	<div class="content">
		<form method="POST" class="question">
			<p>{sumOfDigits(data.score)}</p>
			<p>{data.usedQuestions}</p>
			<h1>{question}</h1>

			<div class="choices">
				<label for="c0">
					<input type="radio" bind:group={answer} value={0} name="c0" class="choice" />
					Linke
				</label>

				<label for="c1">
					<input type="radio" bind:group={answer} value={1} name="c1" class="choice" />
					Grüne
				</label>

				<label for="c2">
					<input type="radio" bind:group={answer} value={2} name="c2" class="choice" />
					SPD
				</label>

				<label for="c4">
					<input type="radio" bind:group={answer} value={3} name="c4" class="choice" />
					CDU
				</label>

				<label for="c5">
					<input type="radio" bind:group={answer} value={4} name="c5" class="choice" />
					AfD
				</label>
			</div>
			<button type="submit" class={isSelected ? 'submit-btn' : 'locked'} disabled={!isSelected}>
				Nächste
			</button>
			<div class="info">
				{#if isSelected}
					<p>{choices[answer]}</p>
				{/if}
			</div>
		</form>
	</div>
</div>

<style>
	.locked {
		cursor: not-allowed;
		background-color: rgb(75, 152, 71);
		padding: 15px;
		margin-top: 25px;
		border-radius: 10px;
		border: none;
		transition: all 0.1s;
		font-size: 14pt;
	}

	.info {
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 10px;
	}

	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* background-color: #242424; */
		width: 50vw;
		height: 100vh;
	}

	.question {
		background-color: rgb(70, 88, 230);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 50vh;
		border-radius: 10px;
	}
	.choices {
		display: flex;
		justify-content: center;
		width: 100%;
	}

	.choice {
		margin-left: 20px;
	}

	.submit-btn {
		padding: 15px;
		margin-top: 25px;
		border-radius: 10px;
		background-color: rgb(76, 203, 69);
		border: none;
		transition: all 0.1s;
		cursor: pointer;
		font-size: 14pt;
	}

	.submit-btn:hover {
		transition: all 0.1s;
		-webkit-box-shadow: 1px 5px 15px 5px rgba(255, 255, 255, 0.4);
		box-shadow: 1px 5px 15px 5px rgba(255, 255, 255, 0.4);
	}

	/* .choice:hover {
        transition: all .1s;
        -webkit-box-shadow: 1px 5px 15px 5px rgba(255,255,255,0.4); 
        box-shadow: 1px 5px 15px 5px rgba(255,255,255,0.4);
    } */
</style>
