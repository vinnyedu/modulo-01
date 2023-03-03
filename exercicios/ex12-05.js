'use strict';

/* 
  Crie uma função para inverter um array passado pelo usuário.
*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear();

function inverter(função = [5, 4, 3, 2, 1, 0]) {
  const invertido = função.reverse();
  return invertido;
}

console.log(inverter());
