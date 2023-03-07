'use strict';

/* 
    Projeto 3 - Jogo da Velha
*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear();

const matrizExemplo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const jogoVelha = Array(9).fill(undefined);

let vitoria = false;
let vencedor;
let jogada = 'X';
let jogadorX = 0,
  jogadorO = 0;

// Enquanto o jogo da velha estiver rodando

while (!vitoria) {
  // Atualização de jogadas
  console.log(jogoVelha);
  console.log(`É a vez do jogador ${jogada}`);

  const coordenadaDesejada = +prompt(
    'Digite a coordenada desejada(entre 1 e 9): ',
  );
  if (coordenadaDesejada < 1 || coordenadaDesejada > 9) {
    console.log('O número deve ser entre 1 e 9');
    continue;
  }

  if (jogoVelha[coordenadaDesejada]) {
    console.log('Espaço opudado! Digite outra...');
    continue;
  }

  jogoVelha[coordenadaDesejada - 1] = jogada;

  // Chegagem de coordenadas vazias (verifica se o jogo acabou)

  const coordenadasVazias = jogoVelha.filter(Boolean).length;

  if (coordenadasVazias === 0) {
    break;
  }

  // Condições de vitoria

  const condicoesVitoria = [
    // Colunas
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // Linhas
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // Diagonais
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const condicaoVitoria of condicoesVitoria) {
    const [a, b, c] = condicaoVitoria;

    if (
      jogoVelha[a] &&
      jogoVelha[a] === jogoVelha[b] &&
      jogoVelha[a] === jogoVelha[c]
    ) {
      vitoria = true;
      vencedor = jogada;

      break;
    }
  }
  
  // Inverter o jogador
  jogada = jogada === 'X' ? 'O' : 'X';
}
// Resultados finais

if (vitoria) {
  console.log(`O jogador ${vencedor} venceu a partida`);
  if (vencedor === 'X') {
    jogadorX++;
  } else {
    jogadorO++;
  }
} else {
  console.log('A partida terminou em empate');
}
