/* 
  Faça um programa que peça um número inteiro e crie arrays com:
    - Todos os números pares, de 0 ao número escolhido;
    - Todos os números ímpares, do 0 ao número escolhido.
*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear();

let num,
  i = 0;
const numPar = [],
  numImpar = [];

do {
  num = +prompt('Entre com um número inteiro: ');
} while (isNaN(num));

while (i <= num) {
  if (i % 2 == 0) {
    numPar.push(i);
  } else {
    numImpar.push(i);
  }
  i++;
}

console.log(`Números pares: ${numPar}`);
console.log(`Números impares: ${numImpar}`);