/* 
  Faça um programa em que o usuário escolha a quantidade de alunos a serem cadastrados e peça o nome e nota de cada um. Armazene as informações em duas listas separadas e no final imprima o nome e a nota correspondente de cada aluno, e a média total da notas.
*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear()

const alunos = [],
  notas = [];
let aluno, nota, n;

do {
  n = prompt('Quantidade de alunos a serem cadastrados: ');
} while (isNaN(n));

for (let i = 0; i < n; i++) {
  aluno = prompt(`Nome do ${i + 1}º aluno: `);
  alunos.push(aluno);

  do {
    nota = +prompt(`Nota do ${i + 1}º aluno: `);
  } while (isNaN(nota));
  notas.push(nota);
}

for (let i = 0; i < n; i++) {
  console.log(`Aluno: ${alunos[i]}, nota: ${notas[i]}`);
}
