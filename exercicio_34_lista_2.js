let M = Array(50).fill().map(() => Array(50).fill());

for(let i = 0; i < 50; i++){
    for(let j = 0; j < 50; j++){
        M[i][j] = parseFloat((Math.random() * 10).toFixed(2)); 
    }
}

for(let i = 0; i < 50; i++){
    let elementoDiagonal = M[i][i];
    for(let j = 0; j < 50; j++){
        M[i][j] = parseFloat((M[i][j] * elementoDiagonal).toFixed(2));
    }
}

for(let i = 0; i < 50; i++){
    console.log(M[i].join(' '));
}