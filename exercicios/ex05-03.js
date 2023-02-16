/* 
  Faça um programa que peça um número par, e repita a execução caso o número digitado seja ímpar.
*/

const prompt = require('prompt-sync')({ sigint: true });

do {
  num = +prompt('Escreva um número par: ');
  if (num % 2 != 0) {
    console.log(`${num} é impar`);
  }
} while (num % 2 != 0);
