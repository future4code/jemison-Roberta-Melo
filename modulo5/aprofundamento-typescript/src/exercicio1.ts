//Exercício 1
//a)
const minhaString: String = "2"
//b)
const meuNumero: Number | String = 2
//c)
type Pessoa = {
    nome: String,
    idade: Number,
    corFavorita: String
}

//d)
enum ArcoIris{
  VERMELHA = "Vermelha",
  LARANJA = "Laranja",
  AMARELO = "amarelo",
  VERDE = "Verde",
  AZUL = "Azul",
  ANIL = "Anil",
  VIOLETA = "Violeta"
}

type infoPessoa = Pessoa & {corFavorita: ArcoIris}

const pessoa1: infoPessoa = {
    nome: "Rafael",
    idade: 50,
    corFavorita: ArcoIris.AZUL
}
const pessoa2: infoPessoa = {
    nome: "Matheus",
    idade: 18,
    corFavorita: ArcoIris.VERDE
}
const pessoa3: infoPessoa = {
    nome: "Jose",
    idade: 25,
    corFavorita: ArcoIris.AMARELO
}
//console.table(pessoa1)