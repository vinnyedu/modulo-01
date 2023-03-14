'use strict';

console.clear();

// Aula 20 - Revisão Promises, Async, Await

// console.log('Linha 1');
// console.log('Linha 2');

// const promise = new Promise(function (resolve, reject) {
//     console.log('Promise - Linha 1');
//     console.log('Promise - Linha 2');

//     setTimeout(function () {
//         resolve(99);
//     }, 1000);
// });

// console.log('Linha 3');

// promise.then(function (resultadoDaPromise) {
//     console.log(resultadoDaPromise);
// });

// const promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve(99);
//     }, 1000);
// });

// async function main() {
//     console.log('Linha 1');

//     await promise.then(console.log);

//     console.log('Linha 3');
// }

// main();

async function somar(num1, num2) {
    return num1 + num2;
}

const promise = somar(5, 6);

promise.then(resultado => console.log(resultado));

async function main() {
    const resultado = await somar(9, 10);
    console.log(resultado);
}
main();

const resultado = await somar(5,7)
console.log(resultado);