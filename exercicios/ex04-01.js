/* 
  Reajuste salarial - As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes. Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
    - Salários até R$ 280,00 (incluindo): aumento de 20%.
    - Salários entre R$ 280,00 e R$ 700,00: aumento de 15%.
    - Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%.
    - Salários de R$ 1500,00 em diante: aumento de 5%.
*/

const prompt = require('prompt-sync')({ sigint: true });

let taxa = 0;
const salario = +prompt('Valor do salário: ');

if (salario <= 280) {
  taxa = 20;
} else if (salario <= 780) {
  taxa = 15;
} else if (salario <= 1500) {
  taxa = 10;
} else {
  taxa = 5;
}

const aumento = (salario * taxa) / 100;
const novoSalario = aumento + salario;

console.log(
  `Salário antes do reajuste: R$${salario.toFixed(
    2,
  )}\nAumento aplicado: ${taxa}%\nValor do aumento: ${aumento.toFixed(
    2,
  )}\nNovo salário: R$${novoSalario.toFixed(2)}`,
);
