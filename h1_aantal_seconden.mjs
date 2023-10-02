import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

//Berekenen van het aantal seconden na input van de gebruiker
let day = parseFloat(await userInput.question('Geef mij een aantal dagen: '));
let hour = parseFloat(await userInput.question('Geef mij een aantal uren: '));
let minutes = parseFloat(await userInput.question('Geef mij een aantal minuten: '));
let seconds = parseFloat(await userInput.question('Geef mij een aantal seconden: '));

//Berekening

hour = hour + (day * 24);
minutes = minutes + (hour * 60);
seconds = seconds + (minutes * 60);

console.log('Het totaal aantal seconden is ' + seconds + '.');

process.exit();