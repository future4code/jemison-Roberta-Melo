console.log("exercicio 2")

const clientes =
    [
        { id: 1, nome: "Fulano" },
        { id: 2, nome: "Ciclano" },
        { id: 3, nome: "Beltrano" },
        { id: 4, nome: "Fulana" }
    ]

const cadastraCliente = (id, nome) => {
    if (nome) {
        clientes.push({id: id, nome: nome})
    } else {
        console.log("Erro. Parâmetro inválido")
    }
}

cadastraCliente(5, "Tiano")

console.log(clientes)



/*Geração de tabuada*/

const tabuada = []

const geraTabuada = (numero, item) => {
    if (numero <= 10) {
        for (i = 1; i < (item + 1); i++) {
            tabuada.push(`${numero} x ${i} = ${numero * i}`)
        }
    } else {
        console.log("Erro. Parâmetro inválido.")
    }

}
geraTabuada(10, 15)
console.log(tabuada)