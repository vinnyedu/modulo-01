/* 
  Peça ao usuário uma quantidade de linhas e e outra de colunas, e imprima essas informações na forma de uma tabela como no exemplo de 3 linhas e 4 colunas:

*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear();

let linhas, colunas;
const matriz = [];

do {
  linhas = +prompt('Quantidade de linhas: ');
} while (isNaN(linhas) || linhas < 1);

do {
  colunas = +prompt('Quantidade de colunas: ');
} while (isNaN(colunas) || colunas < 1);

for (let linha = 0; linha < linhas; linha++) {
  const element = [];
  for (let coluna = 0; coluna < colunas; coluna++) {
    element.push(linha + coluna);
  }
  matriz.push(element);
}

for (const i of matriz) {
    console.log(i);
}
