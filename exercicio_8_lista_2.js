let promptSync = require("prompt-sync")();


let horasAtividadeNoMes = promptSync("Por quantas horas você praticou atividade física no mês? ");
const pontos = 0.05;
let dinheiroGanho;

if(horasAtividadeNoMes <= 10){

    dinheiroGanho = pontos * 2 * horasAtividadeNoMes;

}else if(horasAtividadeNoMes > 10 && horasAtividadeNoMes <=  20){

    dinheiroGanho = pontos * 5 * horasAtividadeNoMes;

}else if(horasAtividadeNoMes > 20){

    dinheiroGanho = pontos * 10 * horasAtividadeNoMes;

}
console.log(`Você obteve ${pontos} e ganhou R$ ${dinheiroGanho} reais.`);



