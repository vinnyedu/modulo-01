'use strict';

/* 
  Escreva um programa que peça um número e escreva o fatorial dele. Exemplo 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720
*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear();

let num, fatorial = 1;

do {
  num = +prompt('Fatorial do número: ');
} while (isNaN(num));

for (let i = num; i > 0; i--) {
  fatorial*= i
}
console.log(fatorial);
