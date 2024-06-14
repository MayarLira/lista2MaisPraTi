let numeros = [];

for(let i = 0; i < 20; i++) {
    let numero = Math.floor(Math.random() * 100);
    numeros.push(numero);
}

console.log('Números gerados: ', numeros);

numeros.sort((a, b) => a - b);

console.log('Números ordenados: ', numeros);