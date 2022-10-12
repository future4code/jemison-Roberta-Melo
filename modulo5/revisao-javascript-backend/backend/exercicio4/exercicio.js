console.log("exercicio 4")

const primeiraLista = [
    {
        nome: "Banana"
    },
    {
        nome: "Laranja"
    }
]

const segundaLista = [
    {
        nome: "Laranja"
    },
    {
        nome: "Cebola"
    }
]

const gerarLista = []

const geraItensUnicos = (objeto1, objeto2) => {
    for(let i = 0; i < objeto1.length; i++) {
        if (gerarLista.indexOf(objeto1[i]) === -1) {
            gerarLista.push(objeto1[i])
        }
    }
    for(let i = 0; i < objeto2.length; i++) {
        if (gerarLista.indexOf(objeto2[i]) === -1) {
            gerarLista.push(objeto2[i])
        }
    }
}

geraItensUnicos(primeiraLista, segundaLista)
console.log(gerarLista)



