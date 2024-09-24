import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let Getal1=parseFloat(await userInput.question("Geef me 1 getal: "))
let getal2=parseFloat(await userInput.question("Geef me een tweede getal: "))
let som;

som = Getal1 + getal2

console.log("De som van de getallen is " + som)

process.exit();