/* 
  Faça um programa que sorteie 20 números de 0 a 100, armazene todos em um array e imprima em ordem crescente.
*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear();

const numeros = []

for (let i = 0; i < 20; i++) {
  const numero =  Math.floor(Math.random() * 10)
  numeros.push(numero)
}

console.log(numeros);
console.log(numeros.sort((a, b) => a - b));