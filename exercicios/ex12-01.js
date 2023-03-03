'use strict';

/* 
  Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.
*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear();

let n1, n2;

do {
  n1 = +prompt('Primeiro número: ');
} while (isNaN(n1));
do {
  n2 = +prompt('Segundo número: ');
} while (isNaN(n2));

function operacoes(n1, n2) {
  const soma = n1 + n2;
  const subtracao = n1 - n2;
  const multiplicacao = n1 * n2;
  const divisao = n1 / n2;
  console.log(`${n1} + ${n2} = ${soma}`);
  console.log(`${n1} - ${n2} = ${subtracao}`);
  console.log(`${n1} x ${n2} = ${multiplicacao}`);
  console.log(`${n1} ÷ ${n2} = ${divisao.toFixed(2)}`); // ÷ = alt + 0247
}

operacoes(n1, n2);
