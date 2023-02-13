const prompt = require('prompt-sync')({ sigint: true });

console.log('Olá, mundo!');

const nome = prompt('Qual seu nome? ');
console.log('Olá ' + nome);
