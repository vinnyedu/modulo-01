'use strict';

/* 
  Utilizando os conceitos aprendidos até objetos, crie um programa onde jogadores joguem um dado e tenham resultados aleatórios. O programa deve:
   - Perguntar quantas rodadas você quer fazer;
   - Perguntar quantos jogadores vão jogar;
   - Criar um objeto para cada jogador com nome e número tirado;
   - Guarda todos os objetos em uma lista;
   - Ordenar esses objetos, sabendo que o vencedor tirou o maior número no dado.
   - Mostrar no final qual jogador ganhou mais rodadas e foi o grande campeão.
*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear();

class jogadas {
  constructor(nome, jogada) {
    this.nome = nome;
    this.jogada = jogada;
    this.vitorias = 0
  }
}

function verificarDados(params = 'Nome') {
  while (true) {
    let dado;

    if (params === 'Nome') {
      dado = prompt('Nome do jogador: ');
      dado = dado.trim().toLowerCase();
      if (dado.length < 3) {
        console.log(`${params} inválido. deve ser maior que 3.`);
        continue;
      }
      dado = dado.charAt(0).toUpperCase() + dado.slice(1);
    } else {
      dado = +prompt(`Número de ${params}: `);
      if (dado < 1 || isNaN(dado)) {
        console.log('Número de deve ser maior que zero');
        continue;
      }
    }
    return dado;
  }
}

function main() {
  const jogadores = [];

  const numRodadas = verificarDados('Rodadas');
  const numJogadores = verificarDados('Jogadores');

  // Nome dos Jogadores
  for (let i = 0; i < numJogadores; i++) {
    const jogador = verificarDados('Nome');
    jogadores.push(jogador);
  }

  for (let i = 0; i < numRodadas; i++) {
    const element = array[i];
    
  }
}

main();
