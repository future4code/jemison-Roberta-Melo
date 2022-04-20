/*1. Exercícios de interpretação de código

//undefined sem referência
let array
console.log('a. ', array)

//null sem valor
array = null
console.log('b. ', array)

//Tamanho da lista 11 
array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

//3 
let i = 0
console.log('d. ', array[i])

//tem valor no indice
array[i+1] = 19
console.log('e. ', array)

// 9
const valor = array[i+6]
console.log('f. ', valor)



//2. Leia o código abaixo com atenção 

// string em maiúscula: SUBI NUM ÔNIBUS EM MIRROCOS 
//Troca do A pelo I
//Tamanho dos caracteres 27
/*const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)*/




/*EXERCÍCIOS 1
let nomeDoUsuario = prompt("Qual é o seu nome?")
let emailDoUsuario = prompt("Qual é o seu E-mail?")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o) ${nomeDoUsuario}!`)
//console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o) " + nomeDoUsuario + "!")*/




/*EXERCÍCIOS 2

let comidasPreferidas = ["Salada", 
                         "Legumes", 
                         "Frango grelhado", 
                         "Macarrão",
                         "Lasanha"]
console.log("Essas são as minhas comidas preferidas: ", comidasPreferidas)

let preferida =  prompt("Essa é minha comida preferida.")
comidasPreferidas[1] = preferida
console.log(preferida)

let comidaTrocar = comidasPreferidas.replaceAll("Legumes", "Feijoada")*/



//EXERCÍCIOS 3
/*
let tarefas1 = prompt("Qual a sua primeira ação do dia?")
let tarefas2 = prompt("Qual a sua segunda ação do dia?")
let tarefas3 = prompt("Qual a terceira ação do dia?")

let listaDeTarefas = [tarefas1, tarefas2, tarefas3]
console.log(listaDeTarefas)


let numero = prompt("Escolha um número de 0 a 2:")

listaDeTarefas.splice(numero, 1)
console.log(listaDeTarefas)*/




//Desafio
//1.

/*2.
let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(frutas.length)

let indice = frutas[frutas.length - 1]*/