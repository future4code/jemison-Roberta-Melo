import express, {Request, Response} from "express"
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong! 🏓")
})

//2
 type ToDo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
//3
let dados: ToDo[] = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "userId": 1,
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "userId": 1,
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "userId": 1,
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 10,
      "title": "illo est ratione doloremque quia maiores aut",
      "completed": true
    },
]
//4
app.get("/dados", (req: Request, res: Response) => {
    const dadosAfazer = dados.filter((ToDo)=>{
        return ToDo.completed === true
    })
    res.send(dadosAfazer)
})
//5
app.get("/atualizar", (req: Request, res: Response) => {
    const dadosLista = dados.filter((lista)=>{
        return lista.completed === false
    })
    res.send(dadosLista)
})
//6
app.post("/dados/:editar", (req: Request, res: Response) => {
    const {userId, id, title, completed} = req.body

    if(dados){
        dados.push({
            userId: userId,
            id: Date.now(),
            title: title,
            completed: completed
        })
        res.send(dados)
    }else{
        res.status(404).send("Não foi possível editar os status!")
    }
})

//7
app.delete("/dados/:dadosId", (req: Request, res: Response) => {
    const deletarId = req.params.deletarId

    const dado = dados.find((deletar) => deletar.id === Number(deletarId))
       if(dado === undefined){
        res.status(400).send("Dado não encontrado!")
        return

       }else{
        dados = dados.filter((dado) =>{
            return dado.id !== Number(deletarId)
        })
        res.send(dados)
       }
    })

 //8
    app.get("/dados/:userId", (req: Request, res: Response) =>{
        const userId = Number(req.params.userId)
        const dadosUser = dados.filter((user) =>{
            return user.userId === userId
        })
        const dadosNovos = dados.filter((user) =>{
            return user.userId !== userId
        })
        res.send({
            todos: [{Usuarios: dadosUser}, {Novos: dadosNovos}]
        })
    })
    app.put("/dados/:dadosId", (req: Request, res: Response) =>{
        const dadosId = req.params.dadosId
        const dado = dados.find((dado) => dado.id === Number(dadosId))
        if(dado){
            dado.completed = !dado.completed
            res.send(dado) 
        }else{
            res.status(400).send("Dados não encontrado tentar novamente!")
        }
    })
//9 No README