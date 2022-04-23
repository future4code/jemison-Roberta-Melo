// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}
  //console.log(soma(3, 8))

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS ------------------------

/* EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  let altura = Number(prompt("Digite uma altura:")) 
  let largura = Number(prompt("Digite uma largura:"))
  
  let area = (altura * largura) 

  console.log(area)
}
*/



/*EXERCÍCIO 02
function imprimeIdade() {
   let anoAtual = Number(prompt("Digite o ano atual."))
   let anoDeNascimento = Number(prompt("Digite seu ano de nascimento."))
   let idadeAtual = anoAtual - anoDeNascimento

    console.log("ano atual:", anoAtual)
    console.log("ano de nascimento:", anoDeNascimento)
    console.log("Idade atual:", idadeAtual)
}
*/ 


/* EXERCÍCIO 03  
function calculaIMC(peso, altura) {
   let peso = Number(prompt("Qual é o seu peso(kg):"))
   let altura = Number(prompt("Qual é a sua altura(m):"))

   imc = peso / (altura * altura)

  //console.log("O seu IMC é:", imc)
   return imc

}
//calculaIMC()*/

    

/* EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  const nome = prompt("Qual é o seu nome?")
  let idade = Number(prompt("Qual é a sua idade."))
  const email = prompt("Qual é o seu e-mail?")

  console.log("Meu nome é", nome, "tenho", idade, "anos", "e o meu email é", email)

}
imprimeInformacoesUsuario()*/


/* EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  
  let cor1 = prompt("Escolha a cor de número 1.")
  let cor2 = prompt("Escolha a cor de número 2.")
  let cor3 = prompt("Escolha a cor de número 3.")
  
  console.log([cor1, cor2, cor3])

}
imprimeTresCoresFavoritas()*/


/* EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  let frase = string
  let fraseMaiuscula = frase.toUpperCase()
  
  console.log(string, fraseMaiuscula)
 //console.log("oi".toUpperCase());
}
retornaStringEmMaiuscula()*/



/*EXERCÍCIO 07 Indefinido

 function calculaIngressosEspetaculo(custo, valorIngresso) {
 
  let custo = valorIngresso
  //let valorIngresso = ingresso
  custoTotal  = qtd + (custo / valorIngresso)
  //qtd = (custo / valorIngresso)
  return custoTotal 


   //console.log("custo:", custo)
   //console.log("valor de cada ingresso:", valorIngresso)

  //let valorIngresso 
  //let qtd
  //let lucro

  //let custo = Number(prompt("Informe o custo total do espetaculo teatral:"))
  //console.log("", custo)
  //let valorIngresso = Number(prompt("Informe o custo de cada ingresso:"))
  //console.log("", valorIngresso)
 
  //console.log("Os ingessos deverão ser vendiods para custer o espetáculo", qtd)

  //lucro = qtd + (3000 / ingresso)
  //console.log("Os ingressos deverão ser vendidos para obter o lucro de RS 3000", lucro)
}
calculaIngressosEspetaculo()
*/ 


/* EXERCÍCIO 08 Indefinido
function checaStringsMesmoTamanho(string1, string2) {
  return string1 >= string2

  //let texto1 = Boolean(string1)
  //let texto2 = Boolean (string2)
  //string1.toString()
  //console.log(string1)



  //console.log(string1.toString())
  //console.log(string2.toString())
}
*/


/* EXERCÍCIO 09 Indefinido
function retornaPrimeiroElemento(array) {
  let array = [1, 2, 3]
  //console.log(array)
  console.log(retornaPrimeiroElemento(array.length[1]))
}
*/




// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return(array[array.length - 1])
}



/*EXERCÍCIO 11 Indefinido
function trocaPrimeiroEUltimo(array) {
  let primeiro = array[0]
  let ultimo = array.length -1
 

  array.push(primeiro)
  array.unshift(ultimo)
  array.splice(1, 2)
  
  //console.log(array)
  return array 
}
*/ 

/*EXERCÍCIO 12 Indefinido
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() == string2.toLowerCase()
}
console.log(string1, string2)
*/



/* EXERCÍCIO 13  Indefinido
  function checaRenovacaoRG() {
    let anoAtual = Number(prompt("Digite o ano atual:"))
    let anoNascimento = Number(prompt("Digite seu ano de nascimento:"))
    let idade = anoAtual - anoNascimento
    console.log(`Sua idade é, ${idade} anos`)
    idade >= 20 && anoAtual == 2022 || idade > 20
    console.log("Apto a tirar a carteira.")
}
*/



/* EXERCÍCIO 14 Incompleto
function checaAnoBissexto(ano) {
  let ano = Number(prompt("Digite um ano:"))
  ((ano % 4) == 0) && ((ano % 100) != 0)
  return ano
}*/


/*EXERCÍCIO 15 Incompleto
function checaValidadeInscricaoLabenu() {
  let ano = Number(prompt("Você tem mais de 18 anos?"))
  console.log(ano)
  let ensinoMedio = prompt("Você possui ensino médio completo?")
  console.log(ensinoMedio)
  let curso = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  console.log(curso)
}*/
