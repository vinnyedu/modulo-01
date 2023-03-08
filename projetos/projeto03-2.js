'use strict';

/* 
  Projeto 3 - Jogo da Velha
*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear();

function condiçoesIniciais() {
  vitoria = false;
  jogada = 'X';
  jogoVelha = Array(9).fill(0);
}

function imprimeJogo(jogo) {
  console.clear();

  console.log('  Posições\t\t    JOGO');
  console.log(
    ` ${1} | ${2} | ${3}\t\t ${jogo[0]} | ${jogo[1]} | ${
      jogo[2]
    }`,
  );
  console.log(`---+---+---\t\t---+---+---`);
  console.log(
    ` ${4} | ${5} | ${6}\t =>\t ${jogo[3]} | ${jogo[4]} | ${
      jogo[5]
    }`,
  );
  console.log(`---+---+---\t\t---+---+---`);
  console.log(
    ` ${7} | ${8} | ${9}\t\t ${jogo[6]} | ${jogo[7]} | ${
      jogo[8]
    }\n`,
  );
}
let vitoria, vencedor, jogada, jogoVelha;
let jogadorX = 0,
  jogadorO = 0;

condiçoesIniciais();

// Enquanto o jogo da velha estiver rodando
while (!vitoria) {
  // Atualização de jogadas
  imprimeJogo(jogoVelha);
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
  imprimeJogo(jogoVelha)
  console.log(`O jogador ${vencedor} venceu a partida`);
  if (vencedor === 'X') {
    jogadorX++;
  } else {
    jogadorO++;
  }
} else {
  console.log('A partida terminou em empate');
}
