let M = Array(6).fill().map(() => Array(8).fill());
let C = Array(6).fill(0);

for(let i = 0; i < 6; i++){
    for(let j = 0; j < 8; j++){
        M[i][j] = Math.floor(Math.random() * 21) - 10; 
    }
}


for(let i = 0; i < 6; i++){
    for(let j = 0; j < 8; j++){
        if(M[i][j] < 0){
            C[i]++;
        }
    }
}

console.log(C);