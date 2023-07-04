import questions from "./questions.json";


export function randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const add = (x: number, y: number) => {
    return x + y;
}

export function sumOfDigits(num: number) {
    let sum = 0;
    let rest = num;
    while (rest > 0) {
      let einer = rest % 10;
      sum = sum + einer;
      rest = (rest - einer)/10;
    }
    return sum;
}

export const calcResult = (score: number) => {
  const fac = 4 / questions.length;
  
  return score / fac;
}