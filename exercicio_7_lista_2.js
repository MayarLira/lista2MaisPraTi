let promptSync = require("prompt-sync")();

let tipoDoCarro = promptSync("Digite o tipo de carro (popular ou luxo): ");
let diasDeAluguel = Number(promptSync("Digite a quantidade de dias de aluguel: "));
let kmPercorridos = Number(promptSync("Digite a quantidade de Km percorridos: "));

let precoDia;
let precoPorKm;

if(tipoDoCarro == "popular"){
    precoDia = 90;
    if(kmPercorridos <= 100){
        precoPorKm = 0.20;
    }else{
        precoPorKm = 0.10;
    }
}else if(tipoDoCarro == "luxo"){
    precoDia = 150;
    if(kmPercorridos <= 200){
        precoPorKm = 0.30;
    }else{
        precoPorKm = 0.25;
    }
}

let precoTotal = (precoDia * diasDeAluguel) + (precoPorKm * kmPercorridos);

console.log("O preço total a ser pago é: R$ " + precoTotal.toFixed(2));