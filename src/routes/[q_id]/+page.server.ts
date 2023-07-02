import type { Actions, PageServerLoad } from "./$types";
import questions from "../../questions.json";
import { redirect } from "@sveltejs/kit";


export const load: PageServerLoad = async ({request, params}) => {
    const id: number = +params.q_id;
    if(id > questions.length) {
        throw redirect(303, "/");
    }

    return {
        id: id
    }
};

export const actions: Actions = {
    default: async ({ params, request }) => {
        console.log(Object.fromEntries(await request.formData()))
    }
};