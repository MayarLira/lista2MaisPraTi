let vetor = Array.from({length: 6}, () => Math.random() * 100);
let identificador = Math.floor(Math.random() * 5) + 1;

switch(identificador){
    case 1:
        let soma = vetor.reduce((a, b) => a + b, 0);
        console.log(`A soma dos elementos é ${soma.toFixed(2)}`);
        break;
    case 2:
        let produto = vetor.reduce((a, b) => a * b, 1);
        console.log(`O produto dos elementos é ${produto.toFixed(2)}`);
        break;
    case 3:
        let media = vetor.reduce((a, b) => a + b, 0) / vetor.length;
        console.log(`A média dos elementos é ${media.toFixed(2)}`);
        break;
    case 4:
        vetor.sort((a, b) => a - b);
        console.log("Os elementos em ordem crescente são: ", vetor.map(num => parseFloat(num.toFixed(2))));
        break;
    case 5:
        console.log("O vetor é: ", vetor.map(num => parseFloat(num.toFixed(2))));
        break;
}