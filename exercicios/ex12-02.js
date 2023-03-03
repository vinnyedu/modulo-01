'use strict';

/* 
  Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.
*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear();

function divTres(numero) {
  let teste = numero
  if (numero < 0) {
    const teste = numero * -1;
  } 
  if (teste % 3 === 0) {
    return `${numero} é divisivel por 3!`;
  } else {
    return `${numero} não é divisivel por 3!`;
  }
}

let numero;

do {
  numero = +prompt('Informe o número: ');
} while (isNaN(numero));

console.log(divTres(numero));
