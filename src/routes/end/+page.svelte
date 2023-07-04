<script lang="ts">
	import { calcResult, sumOfDigits } from "../../utils";
	import type { PageData } from "./$types";

    export let data: PageData;
	const score = sumOfDigits(data.score);
</script>

<div class="end-wrapper">
	<h1 class="title">Ende</h1>
	<p class="s-title">Dein Score: {score}</p>
	<p class="s-title">Dein Herzblatt: {calcResult(3)}</p>
	<a class="link" href="/">Zum Anfang</a>
</div>

<style>

	.end-wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 10%;
	}

	.s-title {
		font-size: 21pt;
	}

    .title {
        color: white;
		margin: 0px;
		font-size: 51pt;
    }

    .link {
        background-color: rgb(41, 128, 179);
		padding-top: 10px;
		padding-bottom: 10px;
		padding-left: 25px;
		padding-right: 25px;
		text-decoration: none;
		color: white;
		font-size: 21pt;
		border-radius: 10px;
		border: none;
		cursor: pointer;
        /* margin-top: 25px; */
    }
</style>