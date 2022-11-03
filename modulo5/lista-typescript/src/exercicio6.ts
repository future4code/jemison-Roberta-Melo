type Clientes = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const dados: Clientes[] =  [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const saldoNegativo = (saldo: Clientes[])=>{

    const debitos = saldo.map((saldo) =>{
        const debitosSomados = saldo.debitos.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
        saldo.saldoTotal -= debitosSomados
        saldo.debitos = []
    })
    const clienteNegativo = saldo.filter((dados) =>{
        return dados.saldoTotal < 0
    })
    return clienteNegativo
}
console.log(saldoNegativo(dados))