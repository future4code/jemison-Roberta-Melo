const ListaDeTarefas = process.argv[2]
const tarefas= [
   "Lavar Louça",
   "Comprar Leite",
]

 tarefas.push(ListaDeTarefas)

console.table(tarefas)