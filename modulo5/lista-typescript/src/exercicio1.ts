const nome: string = "Mario"
const data: string = "24/04/1993"

const InfoUser = (nome: string, data: string) =>{
    const separadorDeData = data.split("/", 3);

    return `Olá me chamo ${nome}, nasci no dia ${separadorDeData[0]} do mês de ${separadorDeData[1]} do ano de ${separadorDeData[2]}`
}

console.log(InfoUser(nome, data))