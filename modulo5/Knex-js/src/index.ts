import express, { Request, Response } from "express"
import connection from './dataBase/connection'

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())


//1  a) O raw retorna as informações do MySQL

// b)
app.get("/users/:name", async (req: Request, res: Response): Promise<void> =>{
    const name = req.query.name
    let errorCode = 400

    try{
        if(!name){
            errorCode = 422
            throw new Error("Informe o nome correto!")
        }
         const result = await connection.raw(`
            SELECT * FROM Actor WHERE name = "${name}"
        `)

        res.status(200).send(result[0])
    }catch(error: any){
        res.status(errorCode).send(error.message)
    }
})

// c)
app.get("/actors/:gender", async (req: Request, res: Response): Promise<void> => {
    try{

        const gender = req.params.gender

        if(!gender || (gender !== 'male' && gender !== 'female')){
            res.statusCode = 404
            throw new Error("Informe seu gênero")
        }

        const result = await connection.raw(`
            SELECT COUNT(*) as count FROM Actor
            WHERE gender = "${gender}"
        `)
        res.status(200).send(result[0][0])

    }catch(error: any){
        res.status(200).send(error.message)
    }
})


//2 
// a) 
app.put("/actor/:id/salary", async (req: Request, res: Response): Promise<void> => {
    try{
        const id = Number(req.params.id)
        const salary = req.body.salary as number
        const usuario = await connection()

        if(!id){
            res.statusCode = 404
            throw new Error("Informe o seu id")
        }
        
        if(!usuario) {
            res.statusCode = 401
            throw new Error("Não encontramos seu id")
        }

        if(!salary){
            res.statusCode = 404
            throw new Error("Informe outro salário")
        }

        await connection("Actor")
        .update({salary: salary})
        .where({id: id})

        res.status(200).send("Salário alterado com sucesso!")
    }catch (error: any){
        res.status(200).send(error.message)
    }
})
//b)
app.delete("/actors/:id", async(req: Request, res: Response): Promise<void> => {
    const id = req.params.id
    let errorCode = 400

    try{
        if(!id){
            errorCode = 422
            throw new Error("Informar o id do usuário.")
        }
       
         await connection("Actor")
         .delete()
         .where ( {id: id} )

         res.status(200).send("O ator foi deletado com sucesso!")

    }catch (error: any){
        res.status(errorCode).send(error.message)
    }
})

//c)
app.get("/actor/salary/:gender", async (req: Request, res: Response): Promise<void> =>{
    const gender = req.params.gender as string
    let errorCode = 400
    
    try{
        if(!gender || (gender !== 'male' && gender !== 'female')){
            errorCode = 422
            throw new Error("Verifique se é male ou female")
        }
         const result = await connection("Actor")
         .avg("salary")
         .where({gender: gender})

        res.status(200).send(result[0])
    }catch(error: any){
        res.status(errorCode).send(error.message)
    }
})

//3
//a)
app.get("/actors/:id", async(req: Request, res: Response): Promise<void> => {
    const id = req.params.id as string
    let errorCode = 400

    try{
        if(!id){
            errorCode = 404
            throw new Error("Informar o id do usuário.")
        }

        const result = await connection("Actor")
         .where ( {id: id} )

         res.status(200).send(result)

    }catch (error: any){
        res.status(errorCode).send(error.message)
    }
})
//b)
app.get("/actor", async (req: Request, res: Response): Promise<void> =>{
    const gender = req.query.gender as string
    let errorCode = 400
  
    try{
        if(!gender || (gender !== 'male' && gender !== 'female')){
            errorCode = 422
            throw new Error("Verifique se o parâmetro é male ou female")
        }
         const result = await connection("Actor")
         .count('*')
         .where({gender: gender})
        
        res.status(200).send(result[0])
    }catch(error: any){
        res.status(errorCode).send(error.message)
    }
})
// 4
// a) 
app.put("/actor/:id/salary", async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id
    const {salary} = req.body
    let errorCode = 404

    try{
        if(!id){
            res.statusCode = 404
            throw new Error("Informe o seu id")
        }
        if(!salary){
            res.statusCode = 404
            throw new Error("Informe outro salário")
        }

        if(!id){
            res.statusCode = 404
            throw new Error("Id não encontrado")
        }

        await connection("Actor")
        .update({salary: salary})
        .where({id: id})

        res.status(200).send("Salário alterado com sucesso!")
    }catch (error: any){
        res.status(errorCode).send(error.message)
    }
})
//b)
app.delete("/actors/:id", async(req: Request, res: Response): Promise<void> => {
    const id = req.params.id
    let errorCode = 400

    try{
        if(!id){
            res.statusCode = 404
            throw new Error("Informar o id do usuário.")
        }
 
         if(!id){
             res.statusCode = 404
             throw new Error("Id não encontrado")
         }
         await connection("Actor")
         .delete()
         .where ( {id: id} )

         res.status(200).send("O ator foi deletado com sucesso!")

    }catch (error: any){
        res.status(errorCode).send(error.message)
    }
})






































app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});