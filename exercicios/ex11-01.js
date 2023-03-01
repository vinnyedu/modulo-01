'use strict';

/* 
  Faça um programa, com uma função que necessite de três argumentos: dois números e um sinal de operador matemático (+, -, * ou /). Ela deve fazer o cálculo indicado pelo operador usando os dois número passados.
*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear();

let n1, n2, operador
const operadores = ['+', '-', '*', '/']

function calculo(n1, n2, operador) {
  if (operador === '+') {
    return n1 + n2;
  } else if (operador === '-') {
    return n1 - n2;
  } else if (operador === '*') {
    return n1 * n2;
  } else if (operador === '/') {
    if (n2 != 0) {
      return n1 / n2;
    } else {
      return 'infinito';
    }
  }
}

do {
  n1= +prompt('Primeiro número: ')
} while (isNaN(n1));
do {
  n2= +prompt('Segundo número: ')
} while (isNaN(n2));
do {
  console.log('[0] para SOMAR[+]\n[1] para SUBTRAIR[-]\n[2] para MULTIPLICAR[*]\n[3] para DIVIDIR[/]');
  operador = +prompt('Opção escolhida: ')
} while (operador <0 || operador > 3);
const operacao = calculo(n1, n2, operadores[operador])
console.log(`${n1} ${operadores[operador]} ${n2} = ${operacao}`);