import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let geboortejaar=parseFloat(await userInput.question("Wat is je geboortejaar? "))
let toekomstjaar=parseFloat(await userInput.question("Van welk jaar wil je uw leeftijd weten? "))

//let leeftijd = toekomstjaar - geboortejaar;
toekomstjaar=toekomstjaar-geboortejaar

console.log("In het jaar " + (toekomstjaar + geboortejaar) + " Ga je " + toekomstjaar + " of " + (toekomstjaar+1))

process.exit()
