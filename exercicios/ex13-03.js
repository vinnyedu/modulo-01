'use strict';

/* 
  Implementando o exercício anterior, escreva uma função que deve calcular um aumento de salário baseado no cargo. Ela deve receber como argumento o cargo que receberá o aumento, e a taxa que ele irá aumentar. Após isso, aplique esse aumento a todos os funcionários daquele cargo e exiba o valor dos novos salários.
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

function aumentoSalarial(cargo, aumento, lista) {
  console.log(`Aumento de ${aumento}% para o cargo de ${cargo}`);
  const taxa = 1 + aumento / 100;
  for (const funcionario of lista) {
    if (funcionario.cargo === cargo) {
      funcionario.salario *= taxa;      
    }
  }
}

const lista = [];

while (true) {
  const nome = validarDados('nome');
  const cargo = validarDados('cargo');
  const salario = validarDados('salario');

  const f = new funcionario(nome, cargo, salario);
  lista.push(f);

  if (novoCadastro()) {
    continue;
  } else {
    console.log(lista);
    break;
  }
}


console.log();
aumentoSalarial('Junior', 10, lista);
console.log(lista);