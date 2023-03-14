'use strict';

console.clear();

// Aula 18 Async/Await

// // Async with then

// async function exibirNome() {
//     return 'Paulo';
// }

// const retornoDaFuncao = exibirNome();
// console.log(14, retornoDaFuncao);

// retornoDaFuncao.then(nome => console.log(16, nome))

////////////////////////////////////////////////////////////////////////////////
// // Async com await dentro

// async function exibirNome() {
//     const aguardar = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Promise resolvida!');
//             resolve();
//         }, 5000);
//     });

//     const retornoDaPromise = await aguardar;
//     console.log('Retorno da promise', retornoDaPromise);

//     return 'Paulo';
// }

// const retornoDaFuncao = exibirNome();
// console.log(35, retornoDaFuncao);

// retornoDaFuncao.then(nome => console.log(37, nome));

////////////////////////////////////////////////////////////////////////////////
// // Async com await fora

// async function exibirNome() {
//     const aguardar = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Promise resolvida!');
//             resolve();
//         }, 5000);
//     });

//     const retornoDaPromise = await aguardar;
//     console.log('Retorno da promise', retornoDaPromise);

//     return 'Paulo';
// }

// const retornoDaFuncao = exibirNome();
// console.log(58, retornoDaFuncao);

// // retornoDaFuncao.then(nome => console.log(37, nome));

// const resultado = await retornoDaFuncao
// console.log('Resultado:', resultado);

////////////////////////////////////////////////////////////////////////////////
// // Tratamento de erro

// function timer(delay) {
//     return new Promise(resolve => setTimeout(resolve, delay));
// }

// console.log(1);
// await timer(1000);
// console.log(2);

// async function carregaDadosDoSite() {
//     await timer(500);
//     throw new Error('Erro inesperado!');

//     return;
// }

// async function main() {
//     console.log(1);

//     const daddosDoSite = await carregaDadosDoSite().catch(error => {
//         return ['Dados1 Fake', 'Dados2 Fake'];
//     });

//     console.log(daddosDoSite);
//     console.log(2);
// }

// main().catch(error =>
//     console.log('Algum erro ocorreu, mensagem do erro:', error.message),
// );

// function timer(delay) {
//     return new Promise(resolve => setTimeout(resolve, delay));
// }

// async function carregaDadosDoSite() {
//     await timer(500);
//     throw new Error('Erro inesperado!');
// }

// async function main() {
//     try {
//         const daddosDoSite = await carregaDadosDoSite();
//         console.log(daddosDoSite);
//     } catch (error) {
//         console.log('Erro durante o carregamento dos dados', error);
//     }
// }

// main().catch(error =>
//     console.log('Algum erro ocorreu, mensagem do erro:', error.message),
// );

import fetch from 'node-fetch';

// const pokemonInfoListPromises = [];

// async function main() {
//     const pokemonListResponse = await fetch(
//         'https://pokeapi.co/api/v2/pokemon?limit=151',
//     );

//     const pokemonListResult = await pokemonListResponse.json();
//     const pokemonList = pokemonListResult.results;

//     for (const pokemon of pokemonList) {
//         const pokemonResult = fetch(pokemon.url).then(pokemonResponse =>
//             pokemonResponse.json(),
//         );

//         pokemonInfoListPromises.push(pokemonResult);
//     }

//     const pokemonInfoList = await Promise.all(pokemonInfoListPromises)

//     console.log('pokemonInfoList:', pokemonInfoList);
// }

// main();

const pokemonInfoListPromises = [];

async function main() {
    console.time('pokeAPI load')

    const pokemonListResponse = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=151',
    );

    const pokemonListResult = await pokemonListResponse.json();
    const pokemonList = pokemonListResult.results;

    const pokemonInfoListPromises = pokemonList.map(pokemon => {
        const pokemonResult = fetch(pokemon.url).then(pokemonResponse =>
            pokemonResponse.json(),
        );

        return pokemonResult;
    });

    const pokemonInfoList = await Promise.all(pokemonInfoListPromises);

    // console.log('pokemonInfoList:', pokemonInfoList);

    console.timeEnd('pokeAPI load');
}

main();
