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

class jogadas {
  constructor(nome, jogada) {
    this.nome = nome;
    this.jogada = jogada;
  }
}
