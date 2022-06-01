```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let arrayEscolhido = []

for(let numero of arrayDeNumeros) {
  if (numero === numeroEscolhido) {
   arrayEscolhido.push(numero)
  }
}
let resultado = arrayEscolhido.length

if (resultado === 0) {
  return ("Número não encontrado")
} else {
  return (`O número ${numeroEscolhido} aparece ${resultado}x`)
}
}
```
