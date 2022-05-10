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

//9
confirm(
  "Suas cartas são A♥️ J♣️. A carta revelada do computador é 4♣️." +
    "\n" + // \n faz pular a linha
    "Deseja comprar mais uma carta?"
);

/*
Este confirm resulta na mensagem:
*/

if (
  confirm(
    "Suas cartas são A♥️ J♣️. A carta revelada do computador é 4♣️." +
      "\n" +
      "Deseja comprar mais uma carta?"
  )
) {
}

//10
if (confirm("Quer iniciar uma nova rodada?")) {
  /* Responde ok */
}

if (
  confirm(
    "Suas cartas são 3♣️ J♥️. A carta revelada do computador é Q♠️." +
      "\n" +
      "Deseja comprar mais uma carta?"
  )
) {
  /* Responde ok */
}

if (
  confirm(
    "Suas cartas são 3♣️ J♥️ 5♣️ . A carta revelada do computador é Q♠️." +
      "\n" +
      "Deseja comprar mais uma carta?"
  )
) {
  /* Responde ok */
}

//if (confirm("Sair do jogo.")) {}

/* Mensagem de fim de jogo */
console.log("Fim de jogo");

if (
  confirm(
    "Suas cartas são 3♣️ J♥️ 5♣️ 4♣️ . Sua pontuação é 22." +
      "\n" +
      "As cartas do computador são Q♠️ K♦️ . A pontuação do computador é 20." +
      "\n" +
      "O computador ganhou!"
  )
) {
}

//11
if (confirm("Quer iniciar uma nova rodada?")) {
  /* Responde ok */
}

if (
  confirm(
    "Suas cartas são 2♥️ 6♥️. A carta revelada do computador é J♦️." +
      "\n" +
      "Deseja comprar mais uma carta?"
  )
) {
  /* Responde ok */
}

if (
  confirm(
    "Suas cartas são 2♥️ 6♥️ 10♠️ . A carta revelada do computador é J♦️." +
      "\n" +
      "Deseja comprar mais uma carta?"
  )
) {
  /* Responde cancel */
}

// Mensagem de fim de jogo
console.log("Fim de jogo");

if (
  confirm(
    "Suas cartas são 2♥️ 6♥️ 10♠️ . Sua pontuação é 18." +
      "\n" +
      "As cartas do computador são J♦️ 5♣️ 8♣️. A pontuação do computador é 23." +
      "\n" +
      "O usuário ganhou!"
  )
) {
}

let valor = 0;
for (let i = 0; i > 21; i++) {
  console.log("O jogo acabou!", valor);
  valor = valor += i;
}

alert("Fim de jogo");
