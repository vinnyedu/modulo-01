'use strict';

/* 
  Crie um sistema de cadastro de funcionários que deve criar um objeto novo para cada funcionário cadastrado com as informações: nome, cargo e salário. Ele deve armazenar todos esses objetos em uma lista. Ao final de cada cadastro ele deve perguntar se deseja cadastrar um novo funcionário e recomeçar o processo, e caso não haja mais funcionários para cadastrar, ele deve chamar uma função que deve apresentar a quantidade de funcionários com cada cargo e os nomes deles. (Você pode limitar as opções de cargo para facilitar.)
*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear();

class funcionario {
  constructor(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
  }
}

function novoCadastro() {
  while (true) {
    const continuar = prompt('Cadastra novo funcionário?[s/n]')
      .trim()
      .toLocaleLowerCase();
    if (continuar === 's' || continuar === 'sim') {
      return true;
    } else if (continuar === 'n' || continuar === 'nao') {
      return false;
    } else {
      console.log('resposta invalida: sim ou nao');
    }
  }
}
const lista = [];

function validarDados(params = 'nome') {
  while (true) {
    let dado = prompt(`Qual o ${params}?`);

    if (params === 'nome' || params === 'cargo') {
      dado = dado.trim().toLowerCase();
      if (dado.length < 3) {
        console.log(`${params} inválido. deve ser maior que 3.`);
        continue;
      }
      dado = dado.charAt(0).toUpperCase() + dado.slice(1);
    }
    if (params === 'cargo') {
      if (dado != 'Junior' && dado != 'Pleno' && dado != 'Senior') {
        console.log(`${params} inválido... (Junior, Pleno ou Senior)`);
        continue;
      } else if (params === 'salario') {
        Number(dado).toFixed(2);
        if (isNaN(dado) || !(dado > 0)) {
          console.log(`${params} inválido...`);
          continue;
        }
      }
    }
    return dado;
  }
}

loopPrincipal: while (true) {
  const nome = validarDados('nome');
  const cargo = validarDados('cargo');
  const salario = validarDados('salario');

  const f = new funcionario(nome, cargo, salario);
  lista.push(f);

  if (novoCadastro()) {
    continue loopPrincipal;
  } else {
    console.log(lista);
    break loopPrincipal;
  }
}
