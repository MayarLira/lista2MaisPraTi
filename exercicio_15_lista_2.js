const prompt = require('prompt-sync')();

let numeros = [];

for(let i = 0; i < 10; i++) {
    let numero = parseInt(prompt('Digite um número: '));
    numeros.push(numero);
}

for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 === 0) {
        console.log(`O número ${numeros[i]} é par e está na posição ${i}`);
    }
}