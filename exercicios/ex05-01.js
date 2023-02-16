/* 
  Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.
*/

const prompt = require('prompt-sync')({ sigint: true });

const usuario = prompt('Usuário: ').trim()

do {
  senha = prompt('Senha: ').trim()
  if (senha.toLowerCase() == usuario.toLocaleLowerCase()) {
    console.log('ERRO');
    console.log('Usuário e senha devem ser diferentes');
  } else {
    console.log('Cadastro realizado');
    break
  }
} while (true);