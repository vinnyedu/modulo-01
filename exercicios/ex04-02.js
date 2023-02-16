/* 
  Jogo da adivinhação - Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deverá escrever na tela se o usuário venceu ou perdeu.
*/

const prompt = require('prompt-sync')({ sigint: true });
const computador = Math.floor(Math.random() * 10) + 1;

console.log('Jogo da adivinhação');
console.log('Em que número estou pensando?');

do {
  jogador = +prompt('Escolha um número entre 1 e 10: ')
} while (jogador < 1 || jogador > 10);

console.log(`Pensei no número ${computador}`);

if (computador === jogador) {
  console.log('Você venceu! 🎉');
} else {
  console.log('Você perdeu... 😢');
}