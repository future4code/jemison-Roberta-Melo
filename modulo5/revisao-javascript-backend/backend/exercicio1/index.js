//console.log("exercicio 1")

const converteCelsius = (temperatura, escala) => {
    if (escala === "F") {
        const saida = ((temperatura * 1.8) + 32)
        console.log(`${temperatura}° Celsius é equivalente a ${saida}° ${escala}.`)
    } else if ((escala === "K")) {
        const saida = (temperatura - 32) + 273.15
        console.log(`${temperatura}° Celsius é equivalente a ${saida} ${escala}.`)
    } else {
        console.log(`Erro. Parâmetro inválido ${temperatura, escala}.`)
    }
}

converteCelsius(30, "F")
converteCelsius(60, "K")
converteCelsius(80, "G")


