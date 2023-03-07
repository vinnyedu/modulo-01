'use strict';

/* 
    Projeto 3 - Jogo da Velha
*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear();

// Criação da Matriz

const matriz = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const matrizExemplo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let jogoVelha = matriz;

let vitoria = false;
let vencedor;
let jogada = 'X';
let jogadorX = 0,
  jogadorO = 0;

// Enquanto o jogo da velha estiver rodando
while (true) {
  while (!vitoria) {
    // Atualização de jogadas
    for (let i = 0; i < 3; i++) {
      console.log(matrizExemplo[i], jogoVelha[i]);
    }

    console.log(`É a vez do jogador ${jogada}`);

    const coordenadaDesejada = +prompt('Digite a coordenada desejada: ');
    const y = parseInt((coordenadaDesejada - 1) / 3);
    const x = (coordenadaDesejada - 1) % 3;

    if (jogoVelha[y][x]) {
      console.log('Espaço opudado! Digite outra...');

      continue;
    }

    jogoVelha[y][x] = jogada;

    // Inverter o jogador
    jogada = jogada === 'X' ? 'O' : 'X';

    // Chegagem de coordenadas vazias (verifica se o jogo acabou)

    let coordenadasVazias = 0;

    for (let linhaAtual = 0; linhaAtual < jogoVelha.length; linhaAtual++) {
      const linha = jogoVelha[linhaAtual];

      for (let coluna = 0; coluna < linha.length; coluna++) {
        const jogadaAtual = linha[coluna];

        if (!jogadaAtual) {
          coordenadasVazias++;
        }
      }
    }
    if (coordenadasVazias === 0) {
      break;
    }

    // Condições de vitoria

    const condicoesVitoria = [
      // Colunas
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],

      // Linhas
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],

      // Diagonais
      [1, 5, 9],
      [3, 5, 7],
    ];

    for (const condicaoVitoria of condicoesVitoria) {
      // console.log(`Checagem da condição de vitória: ${condicaoVitoria}`);

      let quantidadeValoresIguais = 0;
      let ultimoValor;

      for (const coordenada of condicaoVitoria) {
        const linha = parseInt((coordenada - 1) / 3);
        const coluna = (coordenada - 1) % 3;

        const jogada = matriz[linha][coluna];

        // console.log({ jogada });

        if (jogada && (!ultimoValor || jogada === ultimoValor)) {
          quantidadeValoresIguais++;
        }
        ultimoValor = jogada;
      }
      if (quantidadeValoresIguais === 3) {
        vitoria = true;
        vencedor = ultimoValor;

        break;
      }
      // console.log({ quantidadeValoresIguais });

      // console.log();
    }
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
  console.log(`Jogador X - ${jogadorX} x ${jogadorO} - Jogador O`);

  const continuar = prompt('Deseja continuar?[s/n]');
  if (continuar === 'n') {
    break;
  } else {
    vitoria = false;
    jogada = 'X';
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        jogoVelha[i][j] = 0;
      }
    }
  }
}
