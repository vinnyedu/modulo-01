'use strict';

/* 
  Leia um valor inteiro X. Em seguida mostre os ímpares de 1 até X, um valor por linha, inclusive o X, se for o caso. Use o laço FOR.
*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear();

const numeros = [];
let numero1, numero2;

let x;

do {
  x = +prompt('Entre com um valor inteiro para X: ');
} while (isNaN(x));

for (let i = 0; i <= x; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}
