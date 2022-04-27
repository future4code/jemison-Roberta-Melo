//Exercícios de interpretação de código
//1. a)
//Retorna o primeiro elemento da lista
//Retorna o último elemento
//Retorna o objeto da lista na posição [2]

//2. a) Nome, idade, raça
//b)Faz a cópia do objeto, podendo alterar suas propriedades.

//3. a) Boolean - false e undefined - sem valor atribuído
/*b) Pessoa declara que não é backender: false e undefined faltou 
criar um objeto da altura da pessoa*/ 



//Exercícios de escrita de código
//1. a)
/**/
const pessoa = {
	nome: "Eduardo", 
	apelidos: ["Cadão", "Edu", "Dudu"]
}

const nomePessoa = pessoa.nome
const apelidoPessoa = pessoa.apelidos

console.log("Eu sou", pessoa.nome, "mas pode me chamar de:", pessoa.apelidos[0], pessoa.apelidos[1], pessoa.apelidos[2]);

//b)
/**/
const novaPessoa = {
    ...pessoa,
    nome: "Roberta",
    novoApelidos:["Beta", "Robertinha", "Rô"]
}
const pessoaNova = novaPessoa.nome
const apelidoNovaPessoa = novaPessoa.novoApelidos
console.log("Eu sou", novaPessoa.nome, "mas pode me chamar de:", novaPessoa.novoApelidos[0], novaPessoa.novoApelidos[1], novaPessoa.novoApelidos[2]); 
    novaPessoa.novoApelidos


//2.a)
const usuario = {
    nome: "Ricardo",
    idade: 38,
    profissao: "Desenvolvedor"
}

console.log("O nome da pessoa é", usuario.nome, "tem", usuario.idade, "anos", "e sua profissão é", usuario.profissao);

/**/
const pessoaUsuario = {
    ...usuario,
    nome: "Claudia",
    idade: 35,
    profissao: "Analista"
}
console.log("Foi inserido uma nova pessoa com o nome", pessoaUsuario.usuario.nome, "tem", pessoaUsuario.usuario.idade, "anos", "e sua profissão é", pessoaUsuario.usuario.profissao);

//b)
/**/
function minhaFuncao(objeto, informacao) {
	return objeto[informacao]
   
}

const informacao = {
  nome: "Pablo", 
  idade: 32, 
  profissao: "Engenheiro de Software"
}

minhaFuncao(informacao)

//3. a)
const frutas = {
    carrinho: []
}


//b)
const fruta1 = {
    nome: "Mamao", 
    disponibilidade: true
}
const fruta2 = {
    nome: "Banana", 
    disponibilidade: true
}
const fruta3 = {
    nome: "Uva", 
    disponibilidade: true
}


//c)
function recebeFruta(fruta){
    return carrinho.push(fruta)
}
//recebeFruta(fruta1, fruta2, fruta3)
console.log(fruta1, fruta2, fruta3)

//d)
console.log(carrinho)


