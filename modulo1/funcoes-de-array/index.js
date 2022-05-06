//Exercícios de interpretação de código
//1. a) objeto com nome e apelido. map do item, index, array
//2. a) nomes do item
//3. a) filtra o apelido do item

//Exercícios de escrita de código
//1.
// a)
/*
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const clientesPets = pets.map((pet, index, array) =>{
    return pet.nome
 })
 console.log(clientesPets)
*/

// b)
/*
 const cachorroSalsicha = pets.filter((pet, index, array) =>{
    return pet.raca === "Salsicha"
 })
 console.log(cachorroSalsicha)
*/

//c)
/*
 const cachorroPoodle = pets.filter((pet, index, array) =>{
    return pet.raca === "Poodle"
 })

 const desconto = cachorroPoodle.map((pet) => {
     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`
 })
 console.log(desconto)
 */

//2.
//a)
/*
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];
*/
/*
const pedidosDeProdutos = produtos.map((produto, index, array) => {
  return produto.nome;
});
console.log(pedidosDeProdutos);
*/

//b)
/*
const nomePreco = produtos.map((produto) => {
  return `${produto.nome}, ${produto.preco * 0.95}`;
});
console.log(nomePreco);
*/

//c)
/*
const pedidosDeBebidas = produtos.filter((produto) => {
  return produto.categoria === "Bebidas";
});
console.log(pedidosDeBebidas);
*/

//d)
/*
const palavra = produtos.filter((produto) => {
  if (produto.nome.includes("Ypê")) {
    return produto.nome;
  }
});
console.log(palavra);
*/

//e)
/*
const frase = produtos.map((item) => {
  return `Compre ${item.nome} por ${item.preco}`;
});
console.log(frase);
*/