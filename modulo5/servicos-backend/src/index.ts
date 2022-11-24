import express, { Request, Response } from "express"
import { connection } from "./data/connection"
//import nodemailer from "./services/nodeMailerTransport"
import app from "./app"
import axios from 'axios'

const printError = (error: any) => { console.log(error.sqlMessage || error.message)}

//1
const getAddress = async (cep: string) => {
    const { data } = await axios.get("https://viacep.com.br/ws/${cep}/json/")
    return{
        "Logradouro": `${data.logradouro}`,
        "Bairro": `${data.bairro}`,
        "Cidade": `${data.localidade}`,
        "Estado": `${data.uf}`

    }
}

//3
const addressInfo = async (cep: string, numero: string, complemento: string) => {
    const { data } = await axios.get("https://viacep.com.br/ws/${cep}/json/")

    connection("Address")
    .insert({ 
        CEP: `${cep}`,
        Logradouro: `${data.logradouro}`,
        Numero: `${numero}`,
        Complemento: `${complemento}`,
        Bairro: `${data.bairro}`,
        Cidade: `${data.localidade}`,
        Estado: `${data.uf}`
    })
    .then(() => { console.log("Dados adicionados com sucesso")})
    .catch(printError)
}

app.post("/address", (req: Request, res: Response)=> {
    let {cep, numero, complemento} = req.body

    if(!cep || !numero) {
        res.status(404).send("Informe o seu cep e o número")
    }
    if (!complemento) {
        complemento = "Não encontrado" 
    }
    addressInfo(cep, numero, complemento)
})