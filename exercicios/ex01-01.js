/* 
    Leia 2 valores A e B, que correspondem a 2 notas de um aluno. A seguir calcule e informe a média ponderada do aluno, sabendo que a nota A tem peso 4 e a nota B tem peso 6. Ex: nota a * 4 e nota b * 6.
*/

const prompt = require('prompt-sync')({ sigint: true });

const notaA = prompt('Nota A: ');
const notaB = prompt('Nota B: ');
const media = (notaA * 4 + notaB * 6) / 10;

console.log('A média do aluno é ' + media);
