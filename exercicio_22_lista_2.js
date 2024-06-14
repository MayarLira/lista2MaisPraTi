const prompt = require('prompt-sync')();

function calcularMediaSalarioFilhos() {
    let totalSalario = 0;
    let totalFilhos = 0;
    let maiorSalario = 0;
    let pessoasComSalarioAte350 = 0;
    let contador = 0;

    while (true) {
        let salario = parseFloat(prompt('Digite o salário: '));
        let numFilhos = parseInt(prompt('Digite o número de filhos: '));

        totalSalario += salario;
        totalFilhos += numFilhos;
        contador++;

        if (salario > maiorSalario) {
            maiorSalario = salario;
        }

        if (salario <= 350) {
            pessoasComSalarioAte350++;
        }

        let continuar = prompt('Deseja continuar? (s/n) ');
        if (continuar.toLowerCase() !== 's') {
            break;
        }
    }

    let mediaSalario = totalSalario / contador;
    let mediaFilhos = totalFilhos / contador;
    let percentualSalarioAte350 = (pessoasComSalarioAte350 / contador) * 100;

    return `Média de salário: ${mediaSalario}\nMédia de número de filhos: ${mediaFilhos}\nMaior salário: ${maiorSalario}\nPercentual de pessoas com salário até R$350: ${percentualSalarioAte350}%`;
}

console.log(calcularMediaSalarioFilhos());