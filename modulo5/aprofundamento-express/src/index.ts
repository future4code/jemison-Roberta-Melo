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
type Afazeres = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
//3
let dados: Afazeres[] = [
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
    const dadosAfazer = dados.filter((afazeres)=>{
        return afazeres.completed === true
    })
    res.send(dadosAfazer)
})
//5
app.get("/atualizar", (req: Request, res: Response) => {
    const dadosAfazer = dados.filter((afazer)=>{
        return afazer.completed === false
    })
    res.send(dadosAfazer)
})
//6

//7

//8
    
    

