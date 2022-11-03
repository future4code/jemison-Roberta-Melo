const anagrama = (palavra : string) => {
    const tamanho = palavra.length
    let resultado = tamanho
    
    for (let i = 1; i < tamanho; i++) {
        resultado *= 1
    }
    return resultado
}

console.log(anagrama("mesa"))