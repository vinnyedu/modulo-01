/* 
  Faça um programa que simule um lançamento de dados. Lance o dado 100 vezes e armazene os resultados em um array. Depois, mostre quantas vezes cada valor foi conseguido.
*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear();

const dados = [];

for (let i = 0; i < 100; i++) {
  const element = +Math.floor(Math.random() * 6) + 1;
  dados.push(element);
}
console.log(dados);

const counts = {};

dados.forEach(function (i) {
  counts[i] = (counts[i] || 0) + 1;
});
console.log(counts);
