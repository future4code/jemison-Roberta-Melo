// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort(function (a, b) {
    return a - b;
  });
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter((par) => par % 2 === 0);
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let numeroElevado = array.filter((par) => par % 2 === 0);
  return numeroElevado.map((par) => par * par);
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = 0;

  for (let numero of array) {
    if (numero > maiorNumero) {
      maiorNumero = numero;
    }
  }
  return maiorNumero;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
 
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let numeros = array.sort((a, b) => a - b);
  let segundoMaiorESegundoMenor = [numeros[numeros.length - 2], numeros[1]];

  return segundoMaiorESegundoMenor;
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  let pessoaAnonima = {
    ...pessoa,
    nome: "ANÔNIMO",
  };
  return pessoaAnonima;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
 
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
 
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}
