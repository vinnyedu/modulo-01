'use strict';
console.clear();

// Aula 15: revisão funções e objetos

// function exibirNomeCompleto(nome, sobrenome) {
//     console.log(`${nome} ${sobrenome}`);
// }

// exibirNomeCompleto('Paulo', 'Salvatore')

// Declaração -> Parâmetros
function exibirNome(nome) {
    console.log(nome);
}

// Execução -> Argumento
// const nome1 = 'Paulo'
// exibirNome(nome1)

// const nome2 = 'Anna'
// exibirNome(nome2)

// function somar(num1, num2) {
//   const resultado = num1 + num2;

//   return resultado;
// }

// const res = somar(5, 8);
// console.log(res);

// Arrow Function
// Declaração
// const somarArrow = (num1, num2) => {
//     const resultado = num1 + num2;

//     return resultado;
// };

// // Execução
// const res = somarArrow(10, 30);
// console.log({ res });

// // Declaração
// const somarArrow = (num1, num2) => {
//     return num1 + num2;
// };

// // Execução
// const res = somarArrow(10, 30);
// console.log(res);

// // Declaração
// const somarArrow = (num1, num2) => num1 + num2;

// // Execução
// const res = somarArrow(10, 30);
// console.log(res);

/////////////////////////////////////////////////////////////////////////////////////////
// Objetos

// const pessoa = {
//     nome: 'Paulo',
//     sobrenome: 'Salvatore',
// };

// console.log(pessoa);
// console.log(pessoa.nome);
// pessoa.idade = 20;

// console.log(pessoa);

// // Objeto + Função

// const pessoa = {
//     nome: 'Paulo',
//     sobrenome: 'Salvatore',
//     exibirNomeCompleto: function () {
//         console.log(`${this.nome} ${this.sobrenome}`);
//     }
// };

// // Execução
// pessoa.exibirNomeCompleto()

/////////////////////////////////////////////////////////////////////////////////////////
// Classe - É uma função que cria um objeto

// const paulo = {
//     nome: 'Paulo',
//     sobrenome: 'Salvatore',
//     idade: 20,
//     exibirNomeCompleto: function () {
//         console.log(`${this.nome} ${this.sobrenome}`);
//     },
// };
// const anna = {
//     nome: 'Anna',
//     sobrenome: 'Salvatore',
//     idade: 15,
//     exibirNomeCompleto: function () {
//         console.log(`${this.nome} ${this.sobrenome}`);
//     },
// };

// function exibirNomeCompleto(pessoa) {
//     console.log(`${pessoa.nome} ${pessoa.sobrenome}`);
// }

// paulo.exibirNomeCompleto();
// anna.exibirNomeCompleto();

class Pessoa {
    constructor(nome, sobrenome, idade = undefined) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
    exibirNomeCompleto() {
        console.log(`${this.nome} ${this.sobrenome}`);
    }
}
const novoPaulo = new Pessoa('Paulo', 'Salvatore');
novoPaulo.exibirNomeCompleto();

// console.log(
//     typeof Pessoa,
//     typeof novoPaulo,
//     novoPaulo,
//     novoPaulo instanceof Pessoa,
// );

// Caso 1: quando adicionamos novas informações nos objetos
// Caso 2: quando queremos passar objetos para outros lugares, é interessante passar as funções junto
