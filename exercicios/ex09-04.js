'use strict';

/* 
  Numa eleição existem três candidatos. Faça um programa que peça o número total de eleitores. Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato.
*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear();

let candidatoA = 0,
  candidatoB = 0,
  candidatoC = 0;

const eleitores = +prompt('Numéro de eleitores: ');

for (let i = 0; i < eleitores; i++) {
  let voto;
  while (true) {
    voto = +prompt('[0] Canditado A, [1] Canditado B, [2] Canditato C: ');
    if (isNaN(voto) || voto > 2 || voto < 0) {
      console.log('Voto inválido');
    } else {
      break;
    }
  }
  if (voto === 0) {
    candidatoA++;
  } else if (voto === 1) {
    candidatoB++;
  } else {
    candidatoC++;
  }
}

console.log(`Votos para o Candidato A: ${candidatoA}`);
console.log(`Votos para o Candidato B: ${candidatoB}`);
console.log(`Votos para o Candidato C: ${candidatoC}`);