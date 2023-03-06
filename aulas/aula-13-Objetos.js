'use strict';
console.clear();
// Objetos

// Criação de objetos

// const numeros = [10, 20, 30];
// //               0   1   2

// console.log(numeros, typeof numeros);

// Objetos precisam de nomes ou valores para seus índices

// const nome = 'Paulo';
// const sobrenome = 'Salvatore';
// const idade = 20;

// function exibirPessoa(nome, sobrenome, idade)

// Chave e Valor
// Index/Value
// Key/Value

// const pessoa = {
//   nome: 'Paulo',
//   sobrenome: 'Salvatore',
//   idade: 20,
// };
// console.log(pessoa, typeof pessoa);

// // Acessando propriedade dos objetos usando .
// console.log(`Nome: ${pessoa.nome}`);

// // Acessando propriedade dos objetos usando ["nome_da_propriedade"]
// console.log(`Nome: ${pessoa['nome']}`);

// pessoa.nome = 'Anna';

// console.log(pessoa.nome);

// const nome = 'Paulo';
// const sobrenome = 'Salvatore';
// const idade = 20;

// const pessoa = {
//   nome,
//   sobrenome,
//   idade,
// };

// console.log(pessoa);

// const pessoa = {
//   nome: 'Paulo',
//   sobrenome: 'Salvatore',
//   idade: 20,
//   vivo: true,
//   lista: [1, 2, 3], // Trailling comma(ultima virgula)
// };

// // Transformando um objeto JavaScript em JSON
// const pessoaEmJson = JSON.stringify(pessoa);

// console.log(typeof pessoaEmJson, pessoaEmJson);

// // JSON JavaScript Object Notation

// const textoEmJson =
//   '{"nome":"Paulo","sobrenome":"Salvatore","idade":20,"vivo":true,"lista":[1,2,3]}';

// console.log(71, typeof textoEmJson, textoEmJson);

// // Transformar JSON em objeto
// const objeto = JSON.parse(textoEmJson);

// console.log(76, typeof objeto, objeto);

//////////////////////////////////////////////////////////////////////////////////////
// Função dentro de objeto

const paulo = {
  nome: 'Paulo',
  sobrenome: 'Salvatore',
  idade: 20,
  exibirNome: function () {
    console.log(`o nome dessa pessoa é ${this.nome} ${this.sobrenome}`);
  },
};

const anna = {
  nome: 'Anna',
  sobrenome: 'Salvatore',
  idade: 20,
  exibirNome: function () {
    console.log(`o nome dessa pessoa é ${this.nome} ${this.sobrenome}`);
  },
};

paulo.exibirNome();
anna.exibirNome();

// function exibirNomeDaPessoa(pessoa) {
//   console.log(`o nome dessa pessoa é ${pessoa.nome} ${pessoa.sobrenome}`);
// }

// exibirNomeDaPessoa(paulo);
// exibirNomeDaPessoa(anna);

// function exibirNomeDaPessoa(pessoa) {
//     if (pessoa === undefined) {
//       console.error(
//         "O objeto 'pessoa' está undefined. Por gentileza, informe um valor vádido",
//       );
//       return;
//     }
//     console.log(`o nome dessa pessoa é ${pessoa.nome} ${pessoa.sobrenome}`);
//   }
