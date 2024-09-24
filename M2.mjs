import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

//let geboortejaar=parseFloat(await userInput.question("Wat is je geboortejaar? "))
//let toekomstjaar=parseFloat(await userInput.question("Van welk jaar wil je uw leeftijd weten? "))






//let leeftijd = toekomstjaar - geboortejaar;

console.log("In het jaar " + toekomstjaar + " Ga je " + leeftijd + " of " + (leeftijd+1))

process.exit()
