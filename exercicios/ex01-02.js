/* 
    Neste problema, deve-se ler o nome de uma peça que chamaremos de peça1, o número de peças1 que o usuário quer, o valor unitário de cada peça1, o nome de uma peça2, o número de peças2 e o valor unitário de cada peça2. Após, calcule e mostre o valor a ser pago.
*/

const prompt = require('prompt-sync')({ sigint: true });

const peca1 = prompt('Peça 1: ')
const numPeca1 = prompt(`Número de ${peca1}:` )
const valorUniPeca1 = prompt(`Valor unitário ${peca1}: `)
const peca2 = prompt('Peça 1: ')
const numPeca2 = prompt(`Número de ${peca2}:` )
const valorUniPeca2 = prompt(`Valor unitário ${peca2}: `)

console.log(`${numPeca1}-${peca1}: R$${valorUniPeca1*numPeca1}`);
console.log(`${numPeca2}-${peca2}: R$${valorUniPeca2*numPeca2}`);