let pares = [];
let impares = [];

for(let i = 0; i < 30; i++){
    let num = Math.floor(Math.random() * 100);

    if(num % 2 === 0){
        pares.push(num);
        if(pares.length === 5){
            console.log("Vetor de pares: ", pares);
            pares = [];
        }
    } else {
        impares.push(num);
        if(impares.length === 5){
            console.log("Vetor de ímpares: ", impares);
            impares = [];
        }
    }
}

console.log("Vetor de pares: ", pares);
console.log("Vetor de ímpares: ", impares);