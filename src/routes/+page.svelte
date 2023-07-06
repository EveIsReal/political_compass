<script lang="ts">
	
	import { score, usedQuestions } from "../stores";
	import { randomIntFromInterval } from "../utils";

	
</script>

<div class="wrapper">
	<h1>💕 Wer ist dein politisches Herzblatt 💕</h1>
	<p style="font-size: 15pt;">Beantworte alle Fragen und finde dein politisches Herzblatt.</p>

	<form method="POST">
		<button type="submit" class="submit">
			Start
		</button>
	</form>
</div>

<style>

	.wrapper > h1 {
		color: white;
		font-size: 31pt;
		margin-top: 7%;
	}

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
		margin-top: 100px;
		transition: all .2s;
	}

	.submit:hover {
		transition: all .2s;
		background-color: rgb(23, 192, 17);
		/* -webkit-box-shadow: 1px 5px 15px 5px rgba(255,255,255,0.4); 
        box-shadow: 1px 5px 15px 5px rgba(255,255,255,0.4); */
	}

</style>
