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
  // max amount of points == 39
  const max = questions.length * 3;
  const f = max/4;

  if(isBetween(f*0, f*1, score)) {
    return "Linke";
  }
  if(isBetween(f*1, f*2, score)) {
    return "Grüne";
  }
  if(isBetween(f*2, f*3, score)) {
    return "Union (CDU/CSU)";
  }
  if(isBetween(f*3, f*4, score)) {
    return "AfD";
  }

}

const isBetween = (min: number, max: number, value: number) => {
  return value >= min && value <= max;
}

export const toImagePath = (score: number) => {
  switch(calcResult(score)) {
    case "AfD":
      switch(randomIntFromInterval(1, 4)) {
        case 1: return "afd/chrupalla.jpg";
        case 2: return "afd/gauland.jpg";
        case 3: return "afd/storch.jpg";
        case 4: return "afd/weidel.jpg";
      }
    break;
    case "Grüne":
      switch(randomIntFromInterval(1, 3)) {
        case 1: return "gruene/baerbock.jpg";
        case 2: return "gruene/habeck.jpg";
        case 3: return "gruene/oezdemir.jpg";
      }
    break;
    case "Linke":
      switch(randomIntFromInterval(1, 2)) {
        case 1: return "linke/gysi.jpg";
        case 2: return "linke/wissler.jpg";
      }
    break;
    case "Union (CDU/CSU)":
      switch(randomIntFromInterval(1, 4)) {
        case 1: return "union/amthor.jpg";
        case 2: return "union/soeder.jpg";
        case 3: return "union/merz.jpg";
        case 4: return "union/laschet.jpg";
      }
    break;
  }
}

export const pathToName = (path: string) => {
  switch(path) {
    case "afd/storch.jpg": return "Beatrix von Storch";
    case "afd/weidel.jpg": return "Alice Weidel";
    case "afd/gauland.jpg": return "Alexander Gauland";
    case "afd/chrupalla.jpg": return "Tino Chrupalla";

    case "union/soeder.jpg": return "Markus Söder";
    case "union/amthor.jpg": return "Philipp Amthor";
    case "union/merz.jpg": return "Friedrich Merz";
    case "union/laschet.jpg": return "Armin Laschet";

    case "gruene/habeck.jpg": return "Robert Habeck";
    case "gruene/baerbock.jpg": return "Annalena Baerbock";
    case "gruene/oezdemir": return "Cem Özdemir";

    case "linke/gysi.jpg": return "Gregor Gysi";
    case "gruene/wissler.jpg": return "Janine Wissler";
  }
}