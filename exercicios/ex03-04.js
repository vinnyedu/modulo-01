/* 
  Faça um programa que leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.
*/

const prompt = require('prompt-sync')({ sigint: true });

const num1 = +prompt('Digite um número inteiro: ');
const num2 = +prompt('Digite outro número inteiro: ');

if (num1 === 0 || num2 === 0 || num1 % num2 === 0 || num2 % num1 === 0) {
  console.log('São multiplos');
} else {
  console.log('Não sao Multiplos');
}
