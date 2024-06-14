const prompt = require('prompt-sync')();

for(let i = 0; i < 80; i++){
    let matricula = prompt('Digite a matrícula: ');
    let nomeFuncionario = prompt('Digite o nome: ');
    let salarioBruto = parseFloat(prompt('Digite o salário bruto: '));

    let deducaoINSS = salarioBruto * 0.12;
    let salarioLiquido = salarioBruto - deducaoINSS;

    console.log(`Matrícula: ${matricula}\nNome: ${nomeFuncionario}\nSalário bruto: ${salarioBruto}\nDedução INSS: ${deducaoINSS}\nSalário líquido: ${salarioLiquido}\n`);
}