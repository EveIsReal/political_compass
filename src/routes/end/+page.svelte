<script lang="ts">
	import { calcResult, pathToName, sumOfDigits, toImagePath } from "../../utils";
	import type { PageData } from "./$types";

    export let data: PageData;
	const score = sumOfDigits(data.score);
	const path = toImagePath(score);
	const name = pathToName(path?? "/");
</script>

<div class="end-wrapper">
	<h1 class="title">Ende</h1>
	<!-- <p class="s-title">Dein Score: {score}</p> -->
	<img src={path} class="img" alt="">
	<p class="s-title"> 💕 Dein Herzblatt: {name} ({calcResult(score)}) 💕</p>
	<a class="link" href="/">Zum Anfang</a>
</div>

<style>

	.img {
		width: 350px;
		height: 350px;
		object-fit: cover;
	}

	.end-wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 5%;
	}

	.s-title {
		font-size: 21pt;
	}

    .title {
        color: white;
		margin-bottom: 20px;
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