'use strict';

/* 
  Faça um programa de agenda telefônica que deve ter as funções: adicionar, alterar, deletar e consultar.
    - Ao adicionar um novo contato, ele deve criar um objeto com os atributos nome e telefone, e adicionar esse objeto a uma lista com todos os contatos.
    - Ao alterar, ele deve receber o nome do contato a ser alterado e o novo telefone. Exiba uma mensagem de erro caso o contato não exista.
    - Ao deletar, ele deve apagar o objeto com o nome passado.
    - Ao consultar, ele deve receber um nome e procurar esse contato na agenda exibindo o número. Exiba uma mensagem de erro caso o contato não exista.
*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear();

class contato {
  constructor(nome, telefone) {
    this.nome = nome;
    this.telefone = telefone;
  }
}

const contatos = [];

function funcoes() {
  while (true) {
    console.log('[1]Adicionar\n[2]Alterar\n[3]Deletar\n[4]Consultar');
    const funcao = +prompt();
    if (funcao < 1 || funcao > 4 || isNaN(funcao)) {
      console.log('Opção inválida');
      continue;
    }
    return funcao;
  }
}

function validarDados(params = 'nome') {
  while (true) {
    let dado = prompt(`${params}`);
    if (params === 'nome') {
      dado = dado.trim();
    } else if (params === 'telefone') {
      dado = Number(dado);
      if (isNaN(dado)) {
        console.log('numero invalido');
      }
    }
  }
}

if (funcao === 1) {
  adicionar();
} else if (funcao === 2) {
  alterar();
} else if (funcao === 3) {
  deletar();
} else if (funcao === 4) {
  consultar();
}
