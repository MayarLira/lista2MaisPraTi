
let velocidade = require("prompt-sync")()("Qual a sua velocidade em km? ");

const multa = 5.00;

if(velocidade > 80){
    let velocidadeExcedida = velocidade - 80;

    let valorMulta = parseFloat(velocidadeExcedida * multa); 

    console.log(`Você foi multado em R$ ${valorMulta} reais`);
}


