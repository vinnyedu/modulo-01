/* 
  Faça um Programa que leia 20 números inteiros e armazene-os num array. Armazene os números pares no array PAR e os números IMPARES no array IMPAR. Imprima os três vetores.
*/

const prompt = require('prompt-sync')({ sigint: true });

const numPar = [],
  numImpar = [];
let numero;

for (let i = 0; i < 20; i++) {
  do {
    numero = +prompt(`${i + 1}º número: `);
  } while (isNaN(numero));
  if (numero % 2 == 0) {
    numPar.push(numero);
  } else {
    numImpar.push(numero);
  }
}
console.log(`Pares: ${numPar}`);
console.log(`Impares: ${numImpar}`);
