'use strict';

/* 
  Escreva uma função para conversão de temperatura. Ela deve receber 2 argumentos: um número e um caracter 'C', 'F' ou 'K', indicando que a temperatura está em Celsius, Fahrenheit ou Kelvin. A função deve exibir a temperatura nas 3 escalas e perguntar qual valor quer retornar.

*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear();

function converterTemperatura(temperatura, escala) {
  const temperaturas = [];
  if (escala === 'C') {
    temperaturas.push(temperatura);
    temperaturas.push((temperatura * 9) / 5 + 32);
    temperaturas.push(temperatura + 273.15);
  } else if (escala === 'F') {
    temperaturas.push(((temperatura - 32) * 5) / 9);
    temperaturas.push(temperatura);
    temperaturas.push(((temperatura - 32) * 5) / 9 + 273.15);
  } else if (escala === 'K') {
    temperaturas.push(temperatura - 273.15);
    temperaturas.push(temperatura - (273.15 * 9) / 5 + 32);
    temperaturas.push(temperatura);
  }
  console.log(`Celsius: ${temperaturas[0].toFixed(2)}ºC`);
  console.log(`Fahrenheit: ${temperaturas[1].toFixed(2)}ºF`);
  console.log(`Kelvin: ${temperaturas[2].toFixed(2)}k`);
}

converterTemperatura(30, 'K');
