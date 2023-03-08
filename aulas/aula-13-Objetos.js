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

// const paulo = {
//   nome: 'Paulo',
//   sobrenome: 'Salvatore',
//   idade: 20,
//   exibirNome: function () {
//     console.log(`o nome dessa pessoa é ${this.nome} ${this.sobrenome}`);
//   },
// };

// const anna = {
//   nome: 'Anna',
//   sobrenome: 'Salvatore',
//   idade: 20,
//   exibirNome: function () {
//     console.log(`o nome dessa pessoa é ${this.nome} ${this.sobrenome}`);
//   },
// };

// paulo.exibirNome();
// anna.exibirNome();

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

//////////////////////////////////////////////////////////////////////////////////////
// Escopo

// this em um arquivo .js executado a partir do node, o this é um objeto vazio
// console.log(123, this);

// //this dentro de uma function, representa um objeto [global] - ou undefined no strict mode
// function funcaoNormal() {
//   console.log(127, this);
// }

// funcaoNormal();

// // this dentro de um função arrow
// const funcaoArrow = () => {
//   console.log(133, this);
// };

// funcaoArrow();

// const paulo = {
//   nome: 'Paulo',
//   sobrenome: 'Salvatore',
//   idade: 20,
//   exibirNome: function () {
//     console.log(`o nome dessa pessoa é ${this.nome} ${this.sobrenome}`);
//   },
//   testeDeEscopo: function () {
//     console.log(147, this);
//     // Escopo do objeto
//   },
//   testeDeEscopo2: () => {
//     console.log(150, this);
//     // Escopo do arquivo
//   },
// };

// paulo.testeDeEscopo();
// paulo.testeDeEscopo2();

//////////////////////////////////////////////////////////////////////////////////////
// Prototype

// Programação imperativa(linha a linha)
// const nome = 'Paulo';
// console.log(nome);

// // Programação funcional
// function funcao() {}

// Programação orientada a obejtos
// class
// object

// Na prática, no JS, uma classe nada mais é que uma função que, ao ser executada, gera um objeto

// const paulo = {
//   nome: 'Paulo',
//   sobrenome: 'Salvatore',
//   idade: 20,
//   exibirNome: function () {
//     console.log(`o nome dessa pessoa é ${this.nome} ${this.sobrenome}`);
//   },
// };

// const anna = {
//   nome: 'Anna',
//   sobrenome: 'Salvatore',
//   idade: 20,
//   exibirNome: function () {
//     console.log(`o nome dessa pessoa é ${this.nome} ${this.sobrenome}`);
//   },
// };

// paulo.exibirNome()
// anna.exibirNome()

//////////////////////////////////////////////////////////////////////////////////////
// Classes

// class Pessoa {
//   constructor(nome, sobrenome, idade, rg) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.idade = idade;
//     this.rg = rg;
//   }

//   // Já é uma função
//   exibirNome() {
//     console.log(`o nome dessa pessoa é ${this.nome} ${this.sobrenome}`);
//   }
//   exibirRb() {
//     console.log(`RG: ${this.rg}`);
//   }
// }

// console.log(Pessoa, typeof Pessoa);

// const paulo = new Pessoa('Paulo', 'Salvatore', 20, 12312312312);
// const anna = new Pessoa('Anna', 'Salvatore', 30);
// console.log(paulo, typeof paulo);
// console.log(anna, typeof paulo);

// paulo.exibirNome();
// anna.exibirNome();

//////////////////////////////////////////////////////////////////////////////////////
// Descontrução de objetos

// const paulo = {
//   nome: 'Paulo',
//   sobrenome: 'Salvatore',
//   idade: 20,
// };

// // const nome = paulo.nome;
// // const sobrenome = paulo.sobrenome;
// // const idade = paulo.idade;

// const { nome, sobrenome, idade } = paulo;

// console.log(nome, sobrenome, idade);

// // Descontrução de Arryas
// const numeros = [10, 20, 30];
// const [a, b, c] = numeros;

// console.log(a + b + c);

//////////////////////////////////////////////////////////////////////////////////////
// Object key, values, entries

const paulo = {
  nome: 'Paulo',
  sobrenome: 'Salvatore',
  idade: 20,
};

console.log('keys', Object.keys(paulo));
console.log('values', Object.values(paulo));
console.log('entries', Object.entries(paulo));

for (const entry of Object.entries(paulo)) {
  console.log('entry', entry);
}