//Exercícios de interpretação de código
//1.

/* a execução foi interrompida no número 5. 
Com o operador de adição passou a valer 10*/

//2.
//a)É impresso os números maiores que 18 - [19, 21, 23, 25, 27, 30]
//b)Sim. Basta utilizar o índice da posição do item

//3.
//quantidade atual de linhas

//Exercícios de escrita de código
//1. Incompleto com erro

/* let pet = Number(
  prompt("Digite quantos bichinhos de estimação você tem?")
);
if (petQtd === 0) {
  console.log("Que pena! Você pode adotar um pet!");
}
while (petDoUsuario < petQtd) {
  petDoUsuario++;
  let petDoUsuario = prompt("Digite os nomes dos pets:");

  console.log(petQtd.push(petDoUsuario));
}*/

//2.
//a)
/*const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

function listaOriginal(array) {
  let numero = 0;

  for (let i = 0; i < array.length; i++) {
    numero = array[i];
  }
  console.log(array);
}
listaOriginal(array);*/

//b)
/*function listaOriginal(array) {
  for (let numero of array) {
    console.log(numero / 10);
  }
}
listaOriginal(array);*/

//c)
/*const par = [];
function numerosPares(array) {
  for (let elemento of array) {
    if (numero % 2 === 0) {
      par.push(elemento);
    }
  }
  console.log(par);
}
numerosPares(array);
*/

//d)
/*const numeroArray = [];
function imprimeArray(array) {
  for (let i = 0; i <= 11; i++) {
    let mensagem = `O elemento do index ${i} é ${array[i]}`;
    numeroArray.push(mensagem);
    console.log(mensagem);
  }
}
imprimeArray(array);*/

//e) 
/*numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

function maior(array) {
  let maior = 0;
  let elemento = 0;
  for (let i = 0; i < array.length; i++) {
    elemento = array[i];
    if (elemento > maior) {
      maior = elemento;
    }
  }
  return maior;
}
console.log(maior(numeros));*/
