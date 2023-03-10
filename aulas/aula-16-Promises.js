'use strict';

const prompt = require('prompt-sync')({ sigint: true });
console.clear();

// Promises

// Como criar um promise

// console.log(14);

// const promiseCriada = new Promise(function (resolve, reject) {
//     console.log(17);
//     // console.log({ resolve }, typeof resolve);
//     // console.log({ reject }, typeof reject);

//     setTimeout(() => {
//         console.log(22);
//         resolve(23);
//     }, 5000);

//     // resolve(10);
//     // reject('Mensagem de erro')
// });

// console.log(30);

// console.log({ promiseCriada }, typeof promiseCriada);

// console.log(20);
// setTimeout(() => console.log(21), 1000);
// console.log(22);

// const promiseCriada = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve(10);
//     }, 1000);
// });

// const trabalhandoComOResultadoDaPromise = promiseCriada.then(function (value) {
//     console.log({ value });
//     console.log(42, { promiseCriada }, typeof promiseCriada);
// });

// console.log(45, { promiseCriada }, typeof promiseCriada);

// Usando o then direto
const promiseCriada = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(10);
    }, 1000);
}).then(function (value) {
    console.log({ value });
    console.log(54, { promiseCriada }, typeof promiseCriada);
});

console.log(57, { promiseCriada }, typeof promiseCriada);