let promptSync = require("prompt-sync")();

let somatorio = 0;
let menorValor = Infinity;
let somaMedia = 0;
let contPares = 0;
let contNum = 0;
let continuar = 's';

do {
    let numero = Number(promptSync("Digite um número: "));
    somatorio += numero;
    if(numero < menorValor){
        menorValor = numero;
    }
    somaMedia += numero;
    if(numero % 2 == 0){
        contPares++;
    }
    contNum++;
    continuar = promptSync("Deseja continuar? (s para sim, n para não): ");
} while(continuar == 's');

let media = somaMedia / contNum;

console.log("O somatório entre todos os valores é: " + somatorio);
console.log("O menor valor digitado foi: " + menorValor);
console.log("A média entre todos os valores é: " + media.toFixed(2));
console.log("A quantidade de valores pares é: " + contPares);