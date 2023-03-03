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

// for (let linha = 0; linha < 3; linha++) {
//   const element = [];
//   for (let coluna = 0; coluna < 3; coluna++) {
//     element.push(' ');
//   }
//   matriz.push(element);
// }

const jogoVelha = matriz;

let vitoria = false;
let vencedor;

// Enquanto o jogo da velha estiver rodando

while (true) {
  // Atualização de jogadas

  const linhaDesejada = +prompt('Digite a linha: ');
  const colunaDesejada = +prompt('Digite a coluna: ');

  if (jogoVelha[linhaDesejada][colunaDesejada]) {
    console.log('Espaço opudado! Digite outra...');

    continue;
  }

  const jogada = prompt('Qual é a jogada (X ou O): ');

  jogoVelha[linhaDesejada][colunaDesejada] = jogada;

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
} else {
  console.log('A partida terminou em empate');
}
