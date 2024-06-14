let gabarito = Array.from({length: 13}, () => Math.floor(Math.random() * 2));

for(let i = 0; i < 100; i++){
    let numeroCartao = i + 1;
    let respostas = Array.from({length: 13}, () => Math.floor(Math.random() * 2));

    let acertos = respostas.reduce((count, resp, index) => count + (resp === gabarito[index] ? 1 : 0), 0);

    console.log(`Número do apostador: ${numeroCartao}, Número de acertos: ${acertos}`);

    if(acertos === 13){
        console.log("Parabéns, tu foi o GANHADOR");
    }
}