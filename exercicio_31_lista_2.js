let A = Math.floor(Math.random() * 10);
let V = Array(30).fill().map(() => Array(30).fill());
let X = Array(30).fill().map(() => Array(30).fill());
let count = 0;

for(let i = 0; i < 30; i++){
    for(let j = 0; j < 30; j++){
        V[i][j] = Math.floor(Math.random() * 10);
        if(V[i][j] === A){
            count++;
        } else {
            X[i][j] = V[i][j];
        }
    }
}

console.log(`O número ${A} aparece ${count} vezes na matriz V.`);

for(let i = 0; i < 30; i++){
    console.log(X[i].join(' '));
}