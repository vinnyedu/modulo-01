/* 
  Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo array. Imprima a média de idade e de altura.
*/

const prompt = require('prompt-sync')({ sigint: true });

const idades = [],
  alturas = [],
  n = 5;

let idade,
  altura,
  sumIdade = 0,
  sumAltura = 0;

for (let i = 0; i < n; i++) {
  do {
    idade = +prompt(`Idade da ${i + 1}ª pessoa: `);
  } while (isNaN(idade));
  sumIdade+= idade;
  do {
    altura = +prompt(`Altura da ${i + 1}ª pessoa: `);
  } while (isNaN(altura));
  sumAltura+= altura;
}

const mediaIdade = sumIdade / n
const mediaAltura = sumAltura / n

console.log(`Média de idade: ${mediaIdade.toFixed(1)}`)
console.log(`Média de altura: ${mediaAltura.toFixed(2)}`);
