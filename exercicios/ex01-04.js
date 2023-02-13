/*
    Leia 3 valores de entrada, referentes à idade de uma pessoa em: anos, meses e dias. Exemplo: eu tenho 30 anos, 2 meses 3 7 dias. Calcule e exiba o total de dias que essa pessoa já viveu. Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. 
*/

const prompt = require('prompt-sync')({ sigint: true });

const dias = +prompt('Sua idade em dias: ');

const anos = dias / 365;
const anosResto = dias % 365;
const meses = anosResto / 30;
const diasResto = anosResto % 30;

console.log(
  `Você tem ${parseInt(anos)} anos, ${parseInt(
    meses,
  )} meses e ${diasResto} dias`,
);
