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
  let numeroMaior = num2;
  let numeroMenor = num1;

  if (num1 > num2) {
    numeroMaior = num1;
    numeroMenor = num2;
  }
  let retornaObjeto = {
    maiorNumero: numeroMaior,
    maiorDivisivelPorMenor: numeroMaior % numeroMenor === 0,
    diferenca: numeroMaior - numeroMenor,
  };
  return retornaObjeto;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let primeirosPares = [];
  for (let i = 0; primeirosPares.length < n; i++) {
    if (i % 2 === 0) {
      primeirosPares.push(i);
    }
  }
  return primeirosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoB === ladoC) {
    return "Equilátero";
  } else if (ladoA === ladoB || ladoB === ladoC || ladoC === ladoA) {
    return "Isósceles";
  } else {
    return "Escaleno";
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let numeros = array.sort((a, b) => a - b);
  let segundoMaiorESegundoMenor = [numeros[numeros.length - 2], numeros[1]];

  return segundoMaiorESegundoMenor;
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  let retornaFilme = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por 
  ${filme.atores[0]}, 
  ${filme.atores[1]}, 
  ${filme.atores[2]}, 
  ${filme.atores[3]}.`;

  return retornaFilme;
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
  return pessoas.filter(
    (item) => item.altura >= 1.5 && item.idade > 14 && item.idade < 60
  );
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  return pessoas.filter(
    (item) => item.altura < 1.5 || item.idade <= 14 || item.idade >= 60
  );
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  let saldo = 0;
  for (let i = 0; i < contas.compras.length; i++) {
    saldo = contas.compras[i];
  }
  return saldo;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  consultas.sort((a, b) => {
    if (a.ordenaNomes > b.ordenaNomes) {
      return true;
    } else return -1;
  });
  return consultas;
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  consultas.sort((a, b) => {
    if (a.consultaDatas > b.consultaDatas) {
      return true;
    } else return -2;
  });
  return consultas;
}
