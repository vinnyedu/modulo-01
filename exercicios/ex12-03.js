'use strict';

/* 
  Faça um programa que tenha uma função chamada area(), que receba as dimensões de um terreno retangular (largura e comprimento) e mostre a área do terreno.
*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear();

function area(largura, comprimento) {
  const area = largura * comprimento;
  console.log(`O terreno tem uma área de ${area} m²`);
}

let largura, comprimento;

do {
  largura = +prompt('Largura do terreno[m]: ');
} while (isNaN(largura));
do {
  comprimento = +prompt('Comprimento do terreno[m]: ');
} while (isNaN(comprimento));

area(largura, comprimento);