let promptSync = require("prompt-sync")();

let primeiroTermo = Number(promptSync("Digite o primeiro termo da PA: "));
let razao = Number(promptSync("Digite a razão da PA: "));

let soma = 0;

console.log("Os 10 primeiros termos da PA são:");

for(let i = 1; i <= 10; i++){
    let termo = primeiroTermo + (i - 1) * razao;
    console.log(termo);
    soma += termo;
}

console.log("A soma dos termos da PA é: " + soma);