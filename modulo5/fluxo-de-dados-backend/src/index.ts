import express, { Request, Response} from "express"
import cors from 'cors'
import { lista } from "./data"

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

//1
app.get("/test", (req: Request, res: Response) =>{
    res.status(201).send("Servidor rodando na porta (3003)!")
})

//4
/*app.post("/produtos", (req: Request, res: Response) =>{
    const {name, price} = req.body

    try{ 
        if(!name){
            const error = new Error("Informe o nome do produto!")
            error.name = "ProductNotFound"
            throw error
        }
        if(!price){
            const error = new Error("Informe o preço do produto!")
            error.name = "ProductNotFound"
            throw error
        }
        if(!name || !price || typeof (price) !== "number" || typeof (name) !== "string" || price <= 0){
            res.statusCode = 422
            throw new Error("Verifique se o nome ou preço, estão preenchido corretamente!")
        }
        lista.push(
            {
                id:Date.now().toString(),
                name: name,
                price: price
        })
        res.status(201).send(lista)
    }catch (error: any){
        res.status(res.statusCode || 500).send({ message: error.message})
    }

})*/

//5
app.get("/produtos", (req: Request, res: Response) => {
    const produto = req.query.name

    if(!produto){
        res.status(200).send(lista)
    }else{
        const todos = lista.filter((item)=>{
            return item.name === produto
        })
        res.status(200).send(todos)
    }
})
//6
//res.status(400).send("Colocar obrigatoriament um id")
app.put("/produtos/:nomeProduto", (req: Request, res: Response)=>{
    try{
        const price = req.body.price
        const nomeProduto = req.params.nomeProduto

        if(!nomeProduto || !price || typeof (price) !== "number" || price <= 0){
            res.status(404).send("")
            throw new Error("Informe o nome do produto")
        }
        const novoProduto = produtos.find((produto)=> produto.name === nomeProduto)
        if(novoProduto){
            novoProduto.price = price
            res.send(produtos)
        }else{
            res.status(404).send("")
            throw new Error("Produto não encontrado")
        }
    }catch(error: any){
        res.status(500).send(error.message)
    }
})
//7
app.delete("/produtos/:nomeProduto", (req: Request, res: Response)=>{
    try{
        const nomeProduto = req.params.nomeProduto
        if(!nomeProduto){
            res.status(404).send("")
            throw new Error("Escolha um produto")
        }
        const listaProduto = produtos.filter((produto)=>{
            return produto.name !== nomeProduto
        })
        res.send(listaProduto)
    }catch (error:any){
        res.status(500).send(error.message)
    }
})