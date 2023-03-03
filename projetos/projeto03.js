'use strict';

/* 
    Projeto 3 - Jogo da Velha
*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear();

// Criação da Matriz

function matriz(linhas = 3, colunas = 3) {
  const matriz = [];
  for (let linha = 0; linha < linhas; linha++) {
    const element = [];
    for (let coluna = 0; coluna < colunas; coluna++) {
      element.push(' ');
    }
    matriz.push(element);
  }
  return matriz;
}

// Solicitar coordenadas aos jogadores
