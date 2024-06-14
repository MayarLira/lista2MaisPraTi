let M = Array(12).fill().map(() => Array(13).fill());

for(let i = 0; i < 12; i++){
    for(let j = 0; j < 13; j++){
        M[i][j] = Math.random() * 10; 
    }
}

let MModificada = Array(12).fill().map(() => Array(13).fill());

for(let i = 0; i < 12; i++){
    let maxElemento = Math.max(...M[i]);
    for(let j = 0; j < 13; j++){
        MModificada[i][j] = M[i][j] / maxElemento;
    }
}

console.log("Matriz original:");
for(let i = 0; i < 12; i++){
    console.log(M[i].join(' '));
}

console.log("Matriz modificada:");
for(let i = 0; i < 12; i++){
    console.log(MModificada[i].join(' '));
}