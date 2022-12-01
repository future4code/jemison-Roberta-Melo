import { Request, Response } from "express";
import { connection } from "../data/connection";
import { getAddressInfo } from "../services/getAddressInfo";
import transporter from "../services/mailTransporter";
import { user } from "../types";

export const createUser = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {
        const { name, zipcode, number, complement } = req.body

        if (!name || !zipcode || !number) {
            errorCode = 422
            throw new Error("Name, Zipcode e Number são obrigatórios.");
        }

        const address = await getAddressInfo(zipcode)

        const newUser: user = {
            nome: name,
            cep: zipcode,
            logradouro: address.logradouro,
            numero: number,
            complemento: complement,
            bairro: address.bairro,
            cidade: address.cidade,
            estado: address.estado
        }

        await connection("ex_servicos_backend")
        .insert(newUser)

        const send = await transporter.sendMail({
            from: process.env.NODEMAILER_USER,
            to: "[email]",
            subject: "",
            text: ""
        })
        console.log(send)

        res.status(201).send("Usuário criado com sucesso!")

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
}