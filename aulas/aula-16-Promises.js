'use strict';

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
// const promiseCriada = new Promise(function (resolve, reject) {
//     const nome = undefined;

//     console.log('Length:', nome.length);
//     setTimeout(() => {
//         resolve(9999);
//         // reject(new Error('Erro inesperado'));
//     }, 1000);
// })
//     .then(function (value) {
//         console.log({ value });
//         console.log(54, { promiseCriada }, typeof promiseCriada);
//     })
//     .catch(function (reason) {
//         console.log('Deu ruim...', reason.message);
//     });

// console.log(66, { promiseCriada }, typeof promiseCriada);

// setTimeout(() => {
//     try {
//         const nome = undefined;

//         console.log('Length:', nome.length);
//     } catch (error) {
//         console.log('Deu ruim: ', error.message);
//     }
// }, 1000);

// const promiseCriada = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         try {
//             const nome =  'Paulo';

//             resolve(nome.length);
//         } catch (error) {
//             reject(error);
//         }
//     }, 1000);
// })
//     .then(function (value) {
//         console.log({ value });

//     })
//     .catch(function (reason) {
//         console.log('Deu ruim...', reason.message);
//     });

// new Promise((resolve, reject) => resolve(5 + 5))
//     .then(value => undefined.length)
//     .then(value => value + 5)
//     .then(console.log)
//     .catch(error => console.log('Deu algum erro'));

// import fetch from 'node-fetch';

// const requisicao = fetch('https://pokeapi.co/api/v2/pokemon?limit=151');

// requisicao
//     .then(response => {
//         console.log('Requisição finalizada com sucesso!');

//         const textPromise = response.json();

//         return textPromise;
//     })
//     .then(text => {
//         const pokemons = text.results;

//         for (const pokemon of pokemons) {
//             console.log(pokemon.url);

//             const requisicaoPokemon = fetch(pokemon.url);

//             requisicaoPokemon.then(pokemon => pokemon.json());
//         }
//     });

import fetch from 'node-fetch';

const promises = [];

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(json => {
        for (const pokemon of json.results) {
            promises.push(
                fetch(pokemon.url)
                    .then(pokemon => pokemon.json())
                    .then(pokemonJson => pokemonJson.sprites.front_default),
            );
        }
    })
    .then(() => {
        Promise.all(promises).then(console.log);
    });

// const promise1 = Promise.resolve(1);
// const promise2 = new Promise((resolve, reject) =>
//     setTimeout(_ => resolve(2), 1000),
// );
// const promise3 = Promise.resolve(3);

// Promise.all([promise1, promise2, promise3]).then(console.log);
