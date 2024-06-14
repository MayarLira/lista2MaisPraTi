let matrizIdentidade = Array(7).fill().map(() => Array(7).fill());

for(let i = 0; i < 7; i++){
    for(let j = 0; j < 7; j++){
        if(i === j){
            matrizIdentidade[i][j] = 1;
        } else {
            matrizIdentidade[i][j] = 0;
        }
    }
}

for(let i = 0; i < 7; i++){
    console.log(matrizIdentidade[i].join(' '));
}let matriz = Array(15).fill().map(() => Array(20).fill());

for(let i = 0; i < 15; i++){
    for(let j = 0; j < 20; j++){
        matriz[i][j] = Math.random();
    }
}

let somas = Array(20).fill(0);
for(let j = 0; j < 20; j++){
    for(let i = 0; i < 15; i++){
        somas[j] += matriz[i][j];
    }
}

for(let j = 0; j < 20; j++){
    console.log(`A soma da coluna ${j+1} é ${somas[j].toFixed(2)}`);
}