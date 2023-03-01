'use strict';

/* 
  Faça um programa que solicite o total gasto pelo cliente de uma loja, imprima as opções de pagamento com os valores totais, solicite a opção desejada e imprima o valor total das prestações (se houverem). Ao final ele deve retornar o valor total da opção escolhida, guardar em uma lista e recomeçar a operação perguntando o valor total gasto pelo próximo cliente. Quando o valor informado for 0, significa que não há mais clientes, então ele chamar uma nova função que vai mostrar quantas compras foram feitas em cada opção, e a soma do valor total de todas elas.
    - Opção: a vista com 10% de desconto;
    - Opção: em duas vezes (preço da etiqueta);
    - Opção: de 3 até 10 vezes com 3% de juros ao mês (somente para compras acima de R$ 100,00).
*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear();

const balanco = { Opção1: 0, Opção2: 0, Opção3: 0, total: 0 };

function opcaoPagamentos(valores) {
  console.log('Formas de pagamento');
  console.log(`[1] À vista(10% de desconto): ${valores[0].toFixed(2)}`);
  console.log(`[2] 2 vezes (s/ juros): ${valores[1].toFixed(2)}`);
  for (let i = 2; i < valores.length; i++) {
    console.log(
      `${i + 1} vezes (3%/mês): ${(valores[i] / (i + 1)).toFixed(2)}`,
    );
  }
  while (true) {
    const opcao = +prompt('Escolha a forma de pagamento: ');
    if (isNaN(opcao) || opcao < 1 || opcao > 10) {
      console.log('Escolha uma opçao valida[1-10]');
    } else if (opcao > 2 && valores[1] < 100) {
      console.log('Opção disponível para acima de R$100,00 ');
    } else {
      return opcao;
    }
  }
}

function valores(valor) {
  const valores = [valor * 0.9, valor];
  for (let i = 3; i < 11; i++) {
    valores.push(+(valor * 1.03 ** i).toFixed(2));
    console.log(valores);
  }
  const opcao = opcaoPagamentos(valores);
  if (opcao === 1) {
    balanco['Opção1']++;
    balanco['total'] += valores[opcao - 1];
  } else if (opcao === 2) {
    balanco['Opção2']++;
    balanco['total'] += valores[opcao - 1];
  } else {
    balanco['Opção3']++;
    balanco['total'] += valores[opcao - 1];
  }
}

function caixa() {
  let valor,
    compra = 1;
  while (true) {
    do {
      console.log('digite 0[zero] para sair');
      valor = +prompt(`${compra}º valor: `);
    } while (isNaN(valor) || valor < 0);
    if (valor > 0) {
      compra++;
      valores(valor);
    } else {
      console.log(balanco);
      break;
    }
  }
}

caixa();
