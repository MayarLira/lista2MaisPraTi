let A = Array(3).fill().map(() => Array(5).fill());
let B = Array(3).fill().map(() => Array(5).fill());

for(let i = 0; i < 3; i++){
    for(let j = 0; j < 5; j++){
        A[i][j] = Math.random();
        B[i][j] = Math.random();
    }
}

let P = Array(3).fill().map(() => Array(5).fill());
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 5; j++){
        P[i][j] = A[i][j] * B[i][j];
    }
}

for(let i = 0; i < 3; i++){
    console.log(P[i].join(' '));
}