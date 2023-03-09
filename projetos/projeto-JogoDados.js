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
  constructor(nome) {
    this.nome = nome;
    this.jogada = [];
    this.vitorias = 0;
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

function verificarVitoria(jogadores) {
  let maior = 0;
  for (const jogador of jogadores) {
    if (jogador.jogada[0] > maior) maior = jogador.jogada[0];
  }
  jogadores.forEach(jogador => {
    if (jogador.jogada[0] === maior) jogador.vitorias += 1;
  });
}

const rolarDado = () => Math.floor(Math.random() * 6 + 1);

function main() {
  const jogadores = [];

  const numRodadas = verificarDados('Rodadas');
  const numJogadores = verificarDados('Jogadores');

  // Nome dos Jogadores
  for (let j = 0; j < numJogadores; j++) {
    const nome = verificarDados('Nome');

    const jogador = new jogadas(nome);
    jogadores.push(jogador);
  }

  // Jogadas
  for (let r = 0; r < numRodadas; r++) {
    jogadores.forEach(jogador => {
      jogador.jogada.unshift(rolarDado());
    });
    verificarVitoria(jogadores);
  }
  console.log(jogadores);
}

main();
