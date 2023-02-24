'use strict';

/* 
  Faça um programa que, dado uma lista de N números (o usuário deve determinar a quantidade de números a serem entrados e entrar cada um deles), determine o menor valor, o maior valor e a soma dos valores.
*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear();

let n,
  menor,
  maior,
  soma = 0;

do {
  n = +prompt('Quantidade de números a serem cadastrados: ');
} while (isNaN(n) && n > 1);

for (let i = 1; i <= n; i++) {
  let element;
  do {
    element = +prompt(`Entre com o ${i}º número: `);
  } while (isNaN(element));
  soma += element;
  if (element > maior || isNaN(maior)) {
    maior = element;
  }
  if (element < menor || isNaN(menor)) {
    menor = element;
  }
}
console.log(`Maior valor: ${maior}\nMenor valor ${menor}\nSoma dos valores: ${soma}`);