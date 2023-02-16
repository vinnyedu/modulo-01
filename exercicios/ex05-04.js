/* 
  Jogo da adivinhação - Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deve ser repetir até o usuário acertar o número, e a cada palpite deve dizer se o número é maior ou menor que o palpite. No final dele deve escrever na tela que o usuário encontrou o número, e mostrar a quantidade de palpites que foi necessária.
*/

const prompt = require('prompt-sync')({ sigint: true });

const computador = Math.floor(Math.random() * 10) + 1;
let jogador = 0;
let palpites = 0

while (computador !== jogador) {
  do {
    jogador = +prompt('Escolha um número entre 1 e 10: ');
  } while (jogador < 1 || jogador > 10);
  if (computador > jogador) {
    console.log('Maior');
  } else if (computador < jogador) {
    console.log('Menor');
  } else {
    console.log('Você venceu! 🎉');
  }
  palpites++
}
console.log(`Você acertou precisou de ${palpites} palpites`);
