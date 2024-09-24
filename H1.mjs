import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let dagen=parseFloat(await userInput.question('Hoeveel dagen? '))
let uren=parseFloat(await userInput.question("Hoeveel uren? "))
let min=parseFloat(await userInput.question('Hoeveel minuten nog? '))
let seconde=parseFloat(await userInput.question("Hoeveel seconde? "))

let aantalsec=parseFloat (((dagen*24)*60)*60) + ((uren*60)*60) + (min*60) + seconde

console.log("Aantal seconde " + aantalsec)

process.exit()
