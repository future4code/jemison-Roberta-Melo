import { Request, Response } from "express"
import { connection } from "../data/connection"

export async function getAllUsers(req: Request, res: Response): Promise<void> {
        let errorCode = 400
        let name = req.query.name as string
        let type = req.params.type as string
        let sort = req.query.sort as string
        let order = req.query.order as string
        let page = Number(req.query.page)

        try {

            if (!name) {
                name = "%"
            }

            if (!type || type === ":type") {
                type = "%"
            }

            if (!sort) {
                sort = "email"
            }

            if (sort !== "name" && sort !== "type") {
                sort = "email"
            }

            if (order && order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC") {
                order = "ASC"
            }

            if (isNaN(page) || page < 1) {
            page = 1
            }

            let offset = 5 * (page - 1)

            const result = await connection("aula48_exercicio")
            .where("name", "like", `%${name}%`)
            .where("type", "like", `%${type}%`)
            .orderBy(sort, order)
            .limit(5)
            .offset(offset)

            if (result.length < 1) {
                errorCode = 404
                throw new Error("Nenhum usuário encontrado.")
             }

            res.status(200).send(result)

        } catch (error:any) {
            res.status(errorCode).send(error.message)
        }

}