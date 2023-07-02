import { get } from "svelte/store";
import { score, usedQuestions } from "../../stores";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ request }) => {
    return {
        score: get(score),
        usedQuestions: get(usedQuestions)
    }
};