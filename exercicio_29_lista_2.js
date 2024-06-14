let M = Array(5).fill().map(() => Array(5).fill());

for(let i = 0; i < 5; i++){
    for(let j = 0; j < 5; j++){
        M[i][j] = Math.random();
    }
}

let somaLinha4 = 0;
let somaColuna2 = 0;
let somaDiagonalPrincipal = 0;
let somaTotal = 0;

for(let i = 0; i < 5; i++){
    for(let j = 0; j < 5; j++){
        if(i === 3){
            somaLinha4 += M[i][j];
        }
        if(j === 1){
            somaColuna2 += M[i][j];
        }
        if(i === j){
            somaDiagonalPrincipal += M[i][j];
        }
        somaTotal += M[i][j];
    }
}

console.log(`A)A soma da linha 4 é: ${somaLinha4.toFixed(2)}`);
console.log(`B)A soma da coluna 2 é: ${somaColuna2.toFixed(2)}`);
console.log(`C)A soma da diagonal principal é: ${somaDiagonalPrincipal.toFixed(2)}`);
console.log(`D)A soma total é: ${somaTotal.toFixed(2)}`);

for(let i = 0; i < 5; i++){
    console.log(M[i].join(' '));
}