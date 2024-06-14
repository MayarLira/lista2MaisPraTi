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
}