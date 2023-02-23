'use strict';

/* 
  Faça um programa que carregue uma lista com os modelos de cinco carros. Carregue uma outra lista com o consumo desses carros, isto é, quantos quilômetros cada um desses carros faz com um litro de combustível. Calcule e mostre:
   - O modelo do carro mais econômico;
   - Quantos litros de combustível cada um dos carros cadastrados consome para percorrer uma distância de 1000 quilômetros e quanto isto custará, considerando um que a gasolina custe R$ 5,50 o litro.
*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear();

const carros = ['Carro A', 'Carro B', 'Carro C', 'Carro D', 'Carro E'],
  consumos = [10.5, 9.2, 14.3, 5, 7.8],
  eficiencia = [];
let menor = 0,
  economico,
  gasolina = 5.5;

for (const consumo of consumos) {
  if (consumo > menor) {
    menor = consumo;
    economico = consumos.indexOf(menor);
  }
  const element = 1000 / consumo;
  eficiencia.push(element.toFixed(1));
}

console.log(`${carros[economico]} é o mais econômico`);
for (let i = 0; i < carros.length; i++) {
  const custo = (eficiencia[i] * gasolina).toFixed(2);
  console.log(
    `${carros[i]} consome ${eficiencia[i]} litros de gasolina para percorer 1000km  ao custo de R$${custo}`,
  );
}
