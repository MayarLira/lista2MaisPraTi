const prompt = require('prompt-sync')();

    let nomeFuncionario = prompt('Digite seu nome: ');
    let cargo = prompt('Digite seu cargo: ');
    let salario = parseInt(prompt('Digite seu salario: '));

   
console.log(nomeFuncionario, cargo, salario);