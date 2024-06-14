let M = Array(5).fill().map(() => Array(5).fill());
let SL = Array(5).fill(0);
let SC = Array(5).fill(0);

for(let i = 0; i < 5; i++){
    for(let j = 0; j < 5; j++){
        M[i][j] = Math.random();
        SL[i] += M[i][j];
        SC[j] += M[i][j];
    }
}

for(let i = 0; i < 5; i++){
    console.log(M[i].join(' '));
}

console.log(`SL: ${SL.join(' ')}`);
console.log(`SC: ${SC.join(' ')}`);