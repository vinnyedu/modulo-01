/* 
  Faça um programa que leia um número, e informe se ele é par ou impar
*/

const prompt = require('prompt-sync')({ sigint: true });

const num = +prompt('Digite um número: ');

if (num % 2 == 0) {
  console.log(`${num} é par`);
} else {
  console.log(`${num} é impar`);
}
