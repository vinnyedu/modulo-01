/* 
  Crie um programa em que o usuário escolha a quantidade de notas a serem inseridas e depois peça e armazene essa quantidade de notas em um array. Ao final imprima a quantidade de alunos APROVADOS (nota >= 7), EM RECUPERAÇÃO (entre 5 e 7) e REPROVADOS (abaixo de 5).
*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear();

let numNotas,
  nota,
  aprovados = 0,
  reprovados = 0,
  recuperacao = 0;
const notas = [];

do {
  numNotas = +prompt('Quantidade de notas a serem inseridas: ');
} while (isNaN(numNotas) || numNotas < 1);

for (let i = 0; i < numNotas; i++) {
  do {
    nota = +prompt(`Nota do ${i + 1}º aluno: `);
  } while (nota < 0 || nota > 10);
  notas.push(nota);
  if (nota >= 7) {
    aprovados++;
  } else if (nota < 5) {
    reprovados++;
  } else {
    recuperacao++;
  }
}

console.log(`Alunos aprovados: ${aprovados}`);
console.log(`Alunos reprovados: ${reprovados}`);
console.log(`Alunos em recuperação: ${recuperacao}`);
