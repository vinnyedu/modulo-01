/* 
  Faça um programa que leia e valide as seguintes informações:
    - Nome: maior que 3 caracteres;
    - Idade: entre 0 e 150;
    - Salário: maior que zero;
    - Estado Civil: 's', 'c', 'v', 'd';
*/

const prompt = require('prompt-sync')({ sigint: true });

do {
  nome = prompt('Nome: ');
  if (nome.length < 4) {
    console.log('Nome deve ter mais que 3 caracteres');
  }
} while (nome.length < 4);

do {
  idade = +prompt('Idade: ');
} while (idade < 0 || idade > 150);

do {
  salario = +prompt('Salário: ');
  if (salario < 1) {
    console.log('Salário deve ser maior que zero');
  }
} while (salario < 1);

do {
  estadoCivil = prompt('Estado civil: ');
  if (
    estadoCivil != 's' &&
    estadoCivil != 'c' &&
    estadoCivil != 'v' &&
    estadoCivil != 'd'
  ) {
    console.log('Estado Civil deve ser s, c, v ou d');
  }
} while (
  estadoCivil != 's' &&
  estadoCivil != 'c' &&
  estadoCivil != 'v' &&
  estadoCivil != 'd'
);
