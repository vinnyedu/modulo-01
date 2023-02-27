'use strict';

/* 
  Faça um programa que peça ao usuário digitar a população e a taxa de crescimento populacional de 2 países A e B, sendo que a população do país A deve ser menor que a de B, e a taxa de crescimento de A seja maior. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.
*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear();

let anos = 0,
  populacaoA,
  populacaoB,
  crescimentoA,
  crescimentoB;

do {
  populacaoA = +prompt('População país A: ');
} while (isNaN(populacaoA) || populacaoA < 1);
do {
  crescimentoA = +prompt('Taxa de crescimento do país A [%]: ');
} while (isNaN(crescimentoA) || crescimentoA < 0);

do {
  populacaoB = +prompt('População país B: ');
} while (isNaN(populacaoB) || populacaoA > populacaoB);
do {
  crescimentoB = +prompt('Taxa de crescimento do país B [%]: ');
} while (isNaN(crescimentoB) || crescimentoA < crescimentoB);

while (true) {
  anos++;
  populacaoA *= 1 + crescimentoA / 100;
  populacaoB *= 1 + crescimentoB / 100;
  if (populacaoA >= populacaoB) {
    console.log(
      `A população do país A alcança a população do país B em ${anos}`,
    );
    break;
  }
}
