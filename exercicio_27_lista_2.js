let M = Array(6).fill().map(() => Array(6).fill());
let V = Array(36).fill(0);

for(let i = 0; i < 6; i++){
    for(let j = 0; j < 6; j++){
        M[i][j] = Math.random();
    }
}

let A = Math.random();

let k = 0;
for(let i = 0; i < 6; i++){
    for(let j = 0; j < 6; j++){
        V[k] = M[i][j] * A;
        k++;
    }
}

console.log(V.join(' '));