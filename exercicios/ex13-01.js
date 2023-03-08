'use strict';

/* 
  Crie um objeto pessoa com os atributos: nome, idade, peso e altura. Além disso, ela deve ter os métodos: envelhecer, engordar, emagrecer, crescer. Por padrão, a cada ano que nossa pessoa envelhece até os 21 anos, ela deve crescer 0,5 cm. Crie um método bio que retorna uma string com todas as informações da pessoa.
*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear();

class pessoa {
  constructor(nome, idade, peso, altura) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
  }

  envelhecer(n = 1) {
    for (let i = 0; i < n; i++) {
      this.idade = this.idade + 1;
      if (this.idade <= 21) {
        this.crescer();
      }
    }
  }
  engordar(n = 1) {
    this.peso = this.peso + n;
  }
  emagrecer(n = 1) {
    this.peso = this.peso - n;
  }
  crescer(n = 0.05) {
    this.altura = +(this.altura + n).toFixed(2);
  }
  bio() {
    return JSON.stringify(this);
  }
}

const anna = new pessoa('Anna', 15, 58, 1.65);
console.log(anna.bio());
anna.envelhecer(10)
console.log(anna.bio());
anna.engordar(10)
console.log(anna.bio());
anna.emagrecer(5)
console.log(anna.bio());

