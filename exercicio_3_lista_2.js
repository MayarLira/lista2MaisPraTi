let distancia = require("prompt-sync")()("Qual a distancia que você deseja percorrer? ");

let precoDaPassagem1 = 0.50;
let precoDaPassagem2 = 0.45;

if(distancia <= 200){
    let totalPassagem = distancia * precoDaPassagem1;
}else if (distancia > 200){
    totalPassagem = distancia * precoDaPassagem2;
}
console.log(`O Valor da sua passagem é de: R$ ${totalPassagem} reais.`);