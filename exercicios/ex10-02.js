'use strict';

/* 
  Peça ao usuário para digitar vários nomes (a quantidade deve ser escolhida por ele). Exiba na tela todos os nomes digitados, porém de maneira invertida (do último para o primeiro), apresente também o maior e o menor nome (caso haja empate, deve mostrar todos).
*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear();

let quantidade,
  nomes = [],
  maiorLista = [],
  menorLista = [],
  maior,
  menor;

do {
  quantidade = +prompt('Quantidade de cadastros: ');
} while (isNaN(quantidade) || quantidade < 1);

for (let i = 0; i < quantidade; i++) {
  const element = prompt(`${i + 1}º nome: `);
  nomes.push(element);
  if (element.length > maior || isNaN(maior)) {
    maior = element.length;
  }
  if (element.length < menor || isNaN(menor)) {
    menor = element.length;
  }
}

for (const nome of nomes) {
  if(nome.length === maior){
    maiorLista.push(nome)
  }
  if(nome.length === menor){
    menorLista.push(nome)
  }
}

// console.log(nomes.sort((a, b) => b - a));
console.log(nomes.reverse());
console.log(`Maiores nomes tem ${maior} letras: ${maiorLista}`);
console.log(`Menores nomes tem ${menor} letras: ${menorLista}`);
