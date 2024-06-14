const prompt = require('prompt-sync')();

for(let i = 0; i < 5; i++){
    let horas = prompt('Digite as horas: ');
    let minutos = prompt('Digite os minutos: ');
    let segundos = prompt('Digite os segundos: ');

    console.log(horas + ':' + minutos + ':' + segundos);
}