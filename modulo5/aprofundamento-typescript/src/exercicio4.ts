//b) 
type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}
//Usaria o comando tsc depois de ter configurado o tsconfig.json
//c) Se o arquivo estivesse na pasta src, seria convertido em um código js para ser executado
//d) o comando tsc é executado no primeiro arquivo e compilado nas outras pastas