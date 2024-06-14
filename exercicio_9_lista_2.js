let promptSync = require("prompt-sync")();

let totalSalarioHomens = 0;
let totalSalarioMulheres = 0;
let continuar = 's';

while(continuar == 's'){
    let salario = Number(promptSync("Digite o salário do funcionário: "));
    let sexo = promptSync("Digite o sexo do funcionário (m para masculino, f para feminino): ");

    if(sexo == 'm'){
        totalSalarioHomens += salario;
    }else if(sexo == 'f'){
        totalSalarioMulheres += salario;
    }

    continuar = promptSync("Deseja continuar? (s para sim, n para não): ");
}

console.log("O total de salário pago aos homens é: R$ " + totalSalarioHomens.toFixed(2));
console.log("O total de salário pago às mulheres é: R$ " + totalSalarioMulheres.toFixed(2));