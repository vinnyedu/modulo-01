'use strict';

/* 
  Faça um programa que peça 2 números e crie um array contando todos os números os números sequenciais do primeiro até o segundo, independente de ser maior ou menor.
*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear();

const numeros = [];
let numero1, numero2;

do {
  numero1 = +prompt('Primeiro número: ');
} while (isNaN(numero1));
do {
  numero2 = +prompt('Segundo número: ');
} while (isNaN(numero2));

if (numero1 > numero2) {
  for (let i = numero1; i >= numero2; i--) {
    // console.log(i);
    numeros.push(i);
  }
} else {
  for (let i = numero1; i <= numero2; i++) {
    // console.log(i);
    numeros.push(i);
  }
}
console.log(numeros);
