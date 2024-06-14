let M = Array(3).fill().map(() => Array(3).fill());

for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        M[i][j] = Math.random() * 10; 
    }
}

let somaDiagonalSecundaria = M[0][2] + M[1][1] + M[2][0];
let mediaDiagonalSecundaria = somaDiagonalSecundaria / 3;

M[0][0] *= mediaDiagonalSecundaria;
M[1][1] *= mediaDiagonalSecundaria;
M[2][2] *= mediaDiagonalSecundaria;

for(let i = 0; i < 3; i++){
    console.log(M[i].join(' '));
}