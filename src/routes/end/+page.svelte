<script lang="ts">
	import { sumOfDigits } from "../../utils";
	import type { PageData } from "./$types";

    export let data: PageData;
</script>

<h1>End</h1>
<p>Dein Score: {sumOfDigits(data.score)}</p>

<style>
    h1 {
        color: white;
    }
</style>