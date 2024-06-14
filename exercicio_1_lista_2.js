let prompt = require("prompt-sync")();

let cigarrosPorDia = require("prompt-sync")()("Quantos cigarros você fuma por dia?");
let anosFumando = require("prompt-sync")()("Há quantos anos você fuma? ");

let totalCigarros = cigarrosPorDia * 365 * anosFumando;
let minutosPerdidos = totalCigarros * 10;

let diasPerdidos = Math.round(minutosPerdidos / 60 / 24);

console.log(`Você perdeu aproximadamente ${diasPerdidos} dias de vida.`);



