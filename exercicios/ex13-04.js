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

function validarDados(params = 'nome') {
  while (true) {
    let dado = prompt(`${params.toUpperCase()}: `);

    if (params === 'nome') {
      dado = dado.trim();
      if (dado.length < 3) {
        console.log('Nome deve ter mais de 3 letras');
        continue;
      }
      return dado;
    } else if (params === 'telefone') {
      dado = Number(dado);
      if (isNaN(dado) || dado.length < 8) {
        console.log('numero invalido');
        continue;
      }
      return dado;
    } else if (params === 'função') {
      dado = Number(dado);
      if (dado < 1 || dado > 5 || isNaN(dado)) {
        console.log('Opção inválida');
        continue;
      }
      return dado;
    }
  }
}

function adicionar(contatos) {
  const nome = validarDados('nome');
  const telefone = validarDados('telefone');
  const newContato = new contato(nome, telefone);
  contatos.push(newContato);
  console.log('Contato adicionado');
}

function alterar(nome, telefone, contatos) {
  for (const contato of contatos) {
    if (contato.nome === nome) {
      contato.telefone = telefone;
      return true;
    }
  }
  return false;
}

function deletar(nome, contatos) {
  for (const contato of contatos) {
    if (contato.nome === nome) {
      contatos = contatos.filter(person => person.name != nome);
      return true;
    }
  }
  return false;
}
function consultar(contatos) {
  for (const contato of contatos) {
    console.log(`Nome: ${contato.nome} - Telefone: ${contato.telefone}`);
  }
}

const contatos = [];

while (true) {
  console.log('[1]Adicionar\n[2]Alterar\n[3]Deletar\n[4]Consultar\n[5]Sair');

  const opcao = validarDados('função');

  if (opcao === 1) {
    console.clear();

    console.log('Adicionar novo contato');
    adicionar(contatos);
  } else if (opcao === 2) {
    console.clear();

    console.log('Alterar contato');
    console.log('Entre com o nome do contado e o NOVO telefone');
    if (alterar(validarDados('nome'), validarDados('telefone'), contatos)) {
      console.log('Contado alterado');
    } else {
      console.log('Contato não encontrado');
    }
  } else if (opcao === 3) {
    console.clear();

    console.log('Deletar contato');
    if (deletar(validarDados('nome'), contatos)) {
      console.log('Contato DELETADO!');
    } else {
      console.log('Contato não encontrado');
    }
  } else if (opcao === 4) {
    console.clear();
    consultar(contatos);
  } else if (opcao === 5) {
    console.clear();
    console.log('Saindo...');
    break;
  }
}
