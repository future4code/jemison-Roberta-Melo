import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";


export class UserController {

    async createUser (req: Request, res: Response) : Promise<void> {
        try {
            const user = {
                name: req.body.name,
                email: req.body.email, 
                password: req.body.password
            }

            await new UserBusiness().createUser(user)

            res.status(201).send({ message: "The user has been registered!" })

        } catch (error:any) {
            res.status(400).send({ error: error.message })
        }
    }

    async getAllUsers (req: Request, res: Response) {
        try {
            const response = await new UserBusiness().getAllUsers()

            res.status(200).send(response)

        } catch (error:any) {
            res.status(400).send({ error: error.message })
        }
    }

    async deleteUser (req: Request, res: Response) : Promise<void> {
        try {
            const input = {
                id: req.params.id
            }

            await new UserBusiness().deleteUser(input)
            res.status(201).send({ message: "The user has been deleted!" })

        } catch (error:any) {
            res.status(400).send({ error: error.message })
        }
    }
} 