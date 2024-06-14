let matriz = Array(10).fill().map(() => Array(10).fill());

for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        matriz[i][j] = Math.random();
    }
}

let somaAcimaDiagonal = 0;
let somaAbaixoDiagonal = 0;

for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        if(j > i){
            somaAcimaDiagonal += matriz[i][j];
        } else if(j < i){
            somaAbaixoDiagonal += matriz[i][j];
        }
    }
}

console.log(`A soma dos elementos acima da diagonal principal é ${somaAcimaDiagonal.toFixed(2)}`);
console.log(`A soma dos elementos abaixo da diagonal principal é ${somaAbaixoDiagonal.toFixed(2)}`);