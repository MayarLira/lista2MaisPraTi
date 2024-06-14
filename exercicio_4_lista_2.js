let promptSync = require("prompt-sync")();

let ladoA = Number(promptSync("Digite o primeiro valor: "));
let ladoB = Number(promptSync("Digite o segundo valor: "));
let ladoC = Number(promptSync("Digite o terceiro valor: "));

if((ladoA + ladoB) > ladoC && (ladoA + ladoC) > ladoB && (ladoC + ladoB) > ladoA){
    console.log("É possível formar um triângulo.");
}else{
    console.log("Não é possível formar um triângulo.");
}