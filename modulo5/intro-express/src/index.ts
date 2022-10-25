import express, { Request, Response} from "express"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

app.get("/teste/:id", (req: Request, res: Response) =>{
    const id = req.params.id;

    console.log(id)
    res.status(201).send("Hello from Express");
})
type User = { 
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string,
}
type Post ={
    id: number,
    title: string,
    body: string,
    userId: number,
}
const users: User[] = [
    {
        id: 1,
        name: "Bruno",
        phone: "(55)123456",
        email: "bruno@gmail.com",
        website: "www.brunoweb.com",
    },
    {
        id: 2,
        name: "Carla",
        phone: "(55)456123",
        email: "carla@gmail.com",
        website: "www.carlaweb.com",
    },
]

//criação do array fora para facilitar a edição

const posts: Post[] = [
    { 
        id: 1,
        title: "asfsdgfdhgfjhk",
        body: "dhbvcnjvkghljhk",
        userId: 1,
    },
]