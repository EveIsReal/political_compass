<script lang="ts">
	import { sumOfDigits } from "../../utils";
	import type { PageData } from "./$types";

    export let data: PageData;
</script>

<h1>Ende</h1>
<p>Dein Score: {sumOfDigits(data.score)}</p>
<a href="/">
    Zum Anfang
</a>

<style>

    h1 {
        color: white;
    }

    a {
        background-color: rgb(41, 128, 179);
		padding-top: 10px;
		padding-bottom: 10px;
		padding-left: 25px;
		padding-right: 25px;
		text-decoration: none;
		color: white;
		font-size: 12pt;
		border-radius: 10px;
		border: none;
		cursor: pointer;
        /* margin-top: 25px; */
    }
</style>