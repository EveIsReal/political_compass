import type { Actions, PageServerLoad } from "./$types";
import questions from "../../questions.json";
import { redirect } from "@sveltejs/kit";
import { score, usedQuestions } from "../../stores";
import { add, randomIntFromInterval } from "../../utils";
import { get } from "svelte/store";


export const load: PageServerLoad = async ({request, params}) => {
    const id: number = +params.q_id;
    if(id > questions.length) {
        throw redirect(303, "/");
    }
    if(get(usedQuestions).length >= questions.length) {
        //throw redirect(303, "/end");
    }

    return {
        id: id,
        score: get(score),
        usedQuestions: get(usedQuestions)
    }
};

export const actions: Actions = {
    default: async ({ params, request, cookies }) => {
        const data = await request.formData();
        const answer = data.values().next().value as number;
        let nextQuestion = -2;

        score.update(old => add(old, answer));

        const newArray = get(usedQuestions);
        if(!newArray.includes(+params.q_id))
            newArray.push(+params.q_id);
        usedQuestions.set(newArray);

        do {
            if(newArray.length === questions.length) break;
            else nextQuestion = randomIntFromInterval(0, questions.length-1);

        } while(newArray.includes(nextQuestion));

        console.log(get(score));

        if(nextQuestion > -1) {
            throw redirect(303, `/${nextQuestion}`)
        } else {
            throw redirect(303, "/end");
        }
    }
};