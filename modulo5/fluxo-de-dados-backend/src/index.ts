import express, { Request, Response} from "express"
import cors from 'cors'
import { lista } from "./data"
//import { Produto } from "./type"

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

//1
app.get("/test", (req: Request, res: Response) =>{
    res.status(200).send("Servidor rodando na porta (3003)!")
})

//4
/*app.post("/lista", (req: Request, res: Response) =>{
  const nomeProduto = req.body.name
  const precoProduto = Number(req.body.price)

  const novoProduto: Produto = {
    id: Date.now().toString(),
    name: nomeProduto,
    price: precoProduto
  }
  lista.push(novoProduto)
  res.status(200).send(lista)
*/
//5
app.get("/lista", (req: Request, res: Response) => {
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
app.put("/lista", (req: Request, res: Response)=>{
 const produtoId = req.body.id
 const novoPreco = req.body.price 
 
 const atualizarProdutos = lista.map(item =>{
    if(item.id === produtoId){
        item.price = novoPreco
    }
    return item
 })
 res.status(200).send(atualizarProdutos)
})


//7
app.delete("/produto/:nomeProduto", (req: Request, res: Response)=>{
    try{
        const nomeProduto = req.params.nomeProduto
        if(!nomeProduto){
            
          res.status(404).send("Informe o produto")
            
        }
        const listaProdutos = lista.filter((lista)=>{
            return lista.name !== nomeProduto
        })
        res.send(listaProdutos)
    }catch (err:any) {
        res.status(res.statusCode || 500).send({message: err.message})
    }
})

//8
/*
app.post("/produtos/validacao", (req: Request, res: Response)=>{
    const nomeProduto = req.body.name
    const precoProduto = req.body.price

    try{
        if(!nomeProduto || !precoProduto){
            const error = new Error("Informe o produto e preço")
            error.name = "ProdutoNotFound"
            throw Error
        }
        if(typeof (nomeProduto) !== "string") {
            const error = new Error("Informe o nome novamente.")
            error.name = "ProdutoNotFound"
            throw Error
        }
        if (typeof (precoProduto) !== "number") {
            const error = new Error("Informe o preço novamente.")
            error.name = "ProdutoNotFound"
            throw Error
        }
        if (precoProduto < 1) {
            const error = new Error("Informe o número maior que 0")
            error.name = "ProdutoNotFound"
            throw Error
        }
        const novoProduto: Produto = {
            id: Date.now().toString(),
            name: nomeProduto,
            price: precoProduto
        }

        lista.push(novoProduto)

        res.status(201).send(lista)
    }catch (error: any) {
        if (error.name === "ProdutoNotFound") {
            res.status(400).send(error.message)
        } else if (error.name = "ProdutoNotFound") {
            res.status(400).send(error.message)
        } else if (error.name === "ProdutoNotFound") {
            res.status(400).send(error.message)
        } else if (error.name === "ProdutoNotFound") {
            res.status(400).send(error.message)
        } else {
            res.status(500).send(error.message)
        }
    }
})
*/
//9
app.put("/produtos/validacao", (req: Request, res: Response)=>{
    const idProduto = req.body.id
    const novoPreco = req.body.price

    try{
        if(!novoPreco){
            const error = new Error("Escolha um novo valor")
            error.name = "ProdutoNotFound"
            throw Error
        }
        if (typeof (novoPreco) !== "number") {
            const error = new Error("Informe o preço novamente.")
            error.name = "ProdutoNotFound"
            throw Error
        }
        if (novoPreco < 1) {
            const error = new Error("Informe o número maior que 0")
            error.name = "ProdutoNotFound"
            throw Error
        }
        const produto = lista.find(item => item.id === idProduto)
        if (!produto) {
            const error = new Error("Informe o produto correto")
            error.name = "ProdutoNotFound"
            throw Error
        }
        const atualizarProdutos = lista.map(item => {
            if (item.id === idProduto) {
                item.price = novoPreco
            }
            return item
        })
        res.status(200).send(atualizarProdutos)
    }catch (error: any) {
        if (error.name === "ProdutoNotFound") {
            res.status(400).send(error.message)
        } else if (error.name === "ProdutoNotFound") {
            res.status(400).send(error.message)
        } else if (error.name === "ProdutoNotFound") {
            res.status(400).send(error.message)
        } else if (error.name === "ProdutoNotFound") {
            res.status(400).send(error.message)
        } else {
            res.status(500).send(error.message)
        }
    }
})
//10
/*
app.delete("/produtos/:id/validacao", (req: Request, res: Response)=> {
    const idProduto = req.params.id

    try{
        if(!idProduto){
            const error = new Error("id inválido")
            error.name = "ProdutoNotFound"
            throw Error
        }
        const produto = lista.find(item => item.id === idProduto)
        if (!produto) {
            const error = new Error("Informe o id corretamente.")
            error.name = "ProdutoNotFound"
            throw Error
        }
        const atualizarProdutos = lista.filter(item => item.id !== idProduto)

        res.status(200).send(atualizarProdutos)
    }catch (error: any) {
        if (error.name === "ProdutoNotFound") {
            res.status(400).send(error.message)
        } else if (error.name === "ProdutoNotFound") {
            res.status(400).send(error.message)
        } else {
            res.status(500).send(error.message)
        }
    }
})
*/
