let promptSync = require("prompt-sync")();

let mao1 = promptSync("Pedra, papel ou tesoura? ");
let mao2 = promptSync("Pedra, papel ou tesoura? ");

if(mao1 == "pedra" && mao2 == "papel"){
    console.log("Papel embrulha pedra!");
}else if(mao1 == "pedra" && mao2 == "tesoura"){
    console.log("Pedra quebra tesoura!");
}else if(mao1 == "papel" && mao2 == "tesoura"){
    console.log("Tesoura corta papel!"); 
}


