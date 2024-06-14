let gabarito = Array.from({length: 20}, () => String.fromCharCode(Math.floor(Math.random() * 26) + 65));

for(let i = 0; i < 50; i++){
    let respostas = Array.from({length: 20}, () => String.fromCharCode(Math.floor(Math.random() * 26) + 65));

    let acertos = respostas.reduce((count, resp, index) => count + (resp === gabarito[index] ? 1 : 0), 0);

    console.log(`Aluno ${i+1}: ${acertos} acertos. ${acertos >= 12 ? "APROVADO" : "REPROVADO"}`);
}