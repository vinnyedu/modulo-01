'use strict';

/* 
  Construa uma função que receba uma data no formato DD/MM/AAAA e devolva uma string no formato 'D de mesPorExtenso de AAAA'. Valide a data e retorne NULL caso a data seja inválida.
*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear();

const data = prompt('entre com uma data no formato dd/mm/aaaa: ')

function datas(data) {
  const element = data.split('/');
  const [dia, mes, ano] = element;
  const meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  return `${dia} de ${meses[mes - 1]} de ${ano}`;
}

console.log(datas(data));
