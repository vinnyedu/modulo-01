'use strict';

/* 
    Projeto 2 - Jokenpô
*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear();

console.log('Jokenpô');

const computador = Math.floor(Math.random() * 3);
const jogadas = ['Pedra', 'Papel', 'Tesoura'];
let jogador,
  rodadas,
  vitoriaJogador = 0,
  vitoriaComputador = 0,
  empate = 0;

do {
  rodadas = +prompt('Número de rodadas: ');
} while (isNaN(rodadas));

for (let i = 0; i < rodadas; i++) {
  do {
    jogador = +prompt('Escolha [0]Pedra, [1]Papel ou [2]Teseoura: ');
  } while (jogador !== 0 && jogador !== 1 && jogador !== 2);

  console.log(
    `Jogador - ${jogadas[jogador]} x ${jogadas[computador]} - Computador`,
  );

  if (jogador === computador) {
    console.log('Empate');
    empate++;
  } else if (jogador === 0) {
    if (computador === 1) {
      console.log('Vitória Computador');
      vitoriaComputador++;
    } else {
      console.log('Vitória Jogador');
      vitoriaJogador++;
    }
  } else if (jogador === 1) {
    if (computador === 2) {
      console.log('Vitória Computador');
      vitoriaComputador++;
    } else {
      console.log('Vitória Jogador');
      vitoriaJogador++;
    }
  } else if (jogador === 2) {
    if (computador === 0) {
      console.log('Vitória Computador');
      vitoriaComputador++;
    } else {
      console.log('Vitória Jogador');
      vitoriaJogador++;
    }
  }
}
console.log(`Número de rodadas: ${rodadas}`);
console.log(`Vitórias jogador: ${vitoriaJogador}`);
console.log(`Vitórias computador: ${vitoriaComputador}`);
console.log(`Empates: ${empate}`);
