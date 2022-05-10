/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!");

if (
  confirm(
    "Começar o jogo! clicar no botão (ok)" +
      "\n" +
      "Sair do jogo Blackjack (cancelar)"
  )
) {
}

console.log(confirm("Quer iniciar uma nova rodada?"));
let sorteio01 = comprarCarta();
let sorteio02 = comprarCarta();
let carta01 = comprarCarta();
let carta02 = comprarCarta();

console.log(
  `Usuário - cartas: ${sorteio01.texto} ${sorteio02.texto} - pontuação ${
    sorteio01.valor + sorteio02.valor
  }`
);
console.log(
  `Usuário - cartas: ${carta01.texto} ${carta02.texto} - pontuação ${
    carta01.valor + carta02.valor
  }`
);

if (sorteio01.valor + sorteio02.valor === carta01.valor + carta02.valor) {
  console.log("Empate!");
}
if (sorteio01.valor + sorteio02.valor > carta01.valor + carta02.valor) {
  console.log("O usuário ganhou!");
}
if (sorteio01.valor + sorteio02.valor < carta01.valor + carta02.valor) {
  console.log("O computador ganhou!");
} else {
  console.log(confirm("O jogo acabou"));
}

const carta = comprarCarta();
// Sorteia uma carta. Por exemplo, o rei de ouros

console.log(carta.texto);
// imprime o texto da carta. Nesse caso: "K♦️"

console.log(carta.valor);
// imprime o valor da carta (um número). Nesse caso: 10)
