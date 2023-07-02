import { redirect } from "@sveltejs/kit";
import { score, usedQuestions } from "../stores";
import type { Actions, PageServerLoad } from "./$types";
import { randomIntFromInterval } from "../utils";
import questions from "../questions.json";

export const load: PageServerLoad = async ({ request }) => {
    
};

export const actions: Actions = {
    default: async () => {
        const firstQuestion = randomIntFromInterval(0, questions.length-1);

        score.set(0);
        usedQuestions.set([]);

        throw redirect(303, `/${firstQuestion}`);
    }
};