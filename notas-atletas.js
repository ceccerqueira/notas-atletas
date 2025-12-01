let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];


//Criando a função que apresenta ao usuário o nome de cada atleta, seguido das notas e da média
function nomeNotaEMediaAtletas(atletas) {
  for (let i = 0; i < atletas.length; i++) {
    let atleta = atletas[i];
    let nome = atleta.nome;


    //Ordenando as notas de cada atleta
    let notasOrdenadas = atletas[i].notas.sort((a, b) => a - b);


    
    //Remove a menor e a maior nota (pega índices 1 a 3)
    let notasParaCalcularMedia = notasOrdenadas.slice(1, 4);


    //Criando 3 variáveis para calcular a média das 3 notas de cada atleta
    let tamanhoDaLista = notasParaCalcularMedia.length;
    let soma = 0;
    let media = 0;


    //Calcula a média das 3 notas de cada atleta
    notasParaCalcularMedia.forEach(function (numero) {
      soma = soma + numero
      return media = soma / tamanhoDaLista
    })



    console.log(`Atleta: ${nome}`);
    console.log(`Notas Obtidas: ${atleta.notas.join(", ")}`); // mostra notas originais
    console.log(`Média Válida: ${media}`); // mostra média com 2 casas decimais
    console.log("\n");
  }
}


//Utilizando a função para imprimir as informações de cada atleta
nomeNotaEMediaAtletas(atletas);