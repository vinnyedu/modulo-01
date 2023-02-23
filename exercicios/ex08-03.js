'use strict';

/* 
  Faça um programa que peça um número e imprima toda a tabuada dele do 1 ao 10.
*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear();

let num;
do {
  num = +prompt('Tabuada do número: ');
} while (isNaN(num));

for (let i = 1; i < 11; i++) {
  const element = num * i;
  console.log(`${num} x ${i} = ${element}`);
}
