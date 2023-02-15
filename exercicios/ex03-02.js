/* 
    Faça um programa para a leitura de quatro notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
        - A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
        - A mensagem "Em recuperação", se a média for entre cinco e sete;
        - A mensagem "Reprovado", se a média for menor que cinco.
*/

const prompt = require('prompt-sync')({ sigint: true });

let sum = 0;

for (let i = 0; i < 4; i++) {
  do {
    nota = +prompt(`Nota ${i + 1}: `);
  } while (nota < 0 || nota > 10);
  sum += nota;
}

const media = sum / 4;
console.log(`Média ${media.toFixed(2)}`);
if (media >= 7) {
  console.log('Aprovado');
} else if (media >= 5) {
  console.log('Em recuperação');
} else {
  console.log('Reprovado');
}
