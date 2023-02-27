'use strict';

/* 
  Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. Um número primo é aquele que é divisível somente por ele mesmo e por 1.
*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear();

let numero;

do {
  numero = +prompt('Entre com um número inteiro: ');
} while (isNaN(numero));

if (numero < 4) {
  console.log(`${numero} é um número primo`);
} else {
  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
      console.log(`${numero} não é primeo`);
      break
    } else {
      console.log(`${numero} é um número primo`);
      break
    }
  }
}
