/*
    A Jornada do Herói
    Hoje nós começamos o nosso primeiro projeto entregável! 
    Esse projeto vai avaliar os conteúdos passados durante essa primeira semana, 
    e se você consegue desenvolver uma programação utilizando todos eles.
    Você poderá usar as aulas de Codelab para trabalhar no seu projeto.
    A premissa é a seguinte: O nosso herói chegou ao fim da sua jornada, ao desafio final, 
    e você pode criar um background legal resumindo qual foi essa jornada e onde ele chegou. 
    Use sua criatividade! 
    
    Vale qualquer coisa: Uma guerreira que percorreu um longo caminho para enfrentar um bruxo e salvar seu povo, 
    um astronauta que teve que viajar aos confins da galáxia para deter uma anomalia que iria engolir seu planeta, 
    ou uma pessoa que está voltando para casa ao fim de um dia cansativo e precisa fazer o jantar.
    Dependendo de como foi sua jornada, dos objetivos que foram concluídos no caminho, teremos um resultado final diferente.
    Requisitos
    Você deve criar um programa que faça 5 perguntas para o usuário, e dependendo das respostas, vai exibir um resultado diferente no final. 
    As perguntas devem ser todas de **Sim** ou **Não**, e devem ser referentes aos objetivos que ele tiveram que ser cumpridos durante a jornada, 
    por exemplo: "Você conseguiu encontrar a Espada Mágica da Chama da Estrela do Inverno?", 
    "Você conseguiu consertar os reatores nucleares do motor de dobra?", 
    "Você se lembrou de passar no mercado e comprar óleo?"
    No final, o programa deve fazer uma contagem de quantas respostas foram **Sim**, e exibir o resultado de acordo com esse número:
    - 0 respostas Sim: Você falha miseravelmente
    - 1 ou 2 respostas Sim: Você falha, mas ainda consegue fugir da situação
    - 3 respostas Sim: Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco
    - 4 respostas Sim: Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita
    - 5 respostas Sim: Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações
    O programa deve contar a história inicial (background), fazer as perguntas, e ao final, exibir o resultado de acordo com as situações acima
*/

const prompt = require('prompt-sync')({ sigint: true });

const perguntas = [
  'pergunta 1: ',
  'pergunta 2: ',
  'pergunta 3: ',
  'pergunta 4: ',
  'pergunta 5: ',
];
let sim = 0;

console.log('Responta com s/n');
for (const [i, pergunta] of perguntas.entries()) {
  do {
    resposta = prompt(pergunta).toLowerCase().replace(/\s+/g, '');
  } while (resposta != 's' && resposta != 'n');
  if (resposta == 's') {
    sim++;
  }
}

if (sim > 4) {
  console.log(
    'Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações',
  );
} else if (sim > 3) {
  console.log(
    'Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita',
  );
} else if (sim > 2) {
  console.log(
    'Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco',
  );
} else if (sim > 0) {
  console.log('Você falha, mas ainda consegue fugir da situação');
} else {
  console.log('Você falha miseravelmente');
}
