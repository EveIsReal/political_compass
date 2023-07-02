import { writable } from "svelte/store";

export const score = writable<number>(0);
export const usedQuestions = writable<number[]>([]);