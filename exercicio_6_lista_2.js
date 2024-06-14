let promptSync = require("prompt-sync")();

let numeroSorteado = Math.floor(Math.random() * 5) + 1;
let palpite = Number(promptSync("Adivinhe o número entre 1 e 5: "));

if(palpite === numeroSorteado){
    console.log("Parabéns! Você acertou.");
}else{
    console.log("Que pena! Você errou. O número sorteado foi " + numeroSorteado);
}