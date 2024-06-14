let resultadoOficial = Array.from({length: 5}, () => Math.floor(Math.random() * 60) + 1);

for(let i = 0; i < 50; i++){
    let aposta = Array.from({length: 5}, () => Math.floor(Math.random() * 60) + 1);

    let ganhador = aposta.every(num => resultadoOficial.includes(num));

    if(ganhador){
        console.log(`Aposta ${i+1} é ganhador(a)!`);
    }
}