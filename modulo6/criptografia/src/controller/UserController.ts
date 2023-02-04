import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { LoginInputDTO, UserInputDTO } from "../model/user";
import { Authenticator } from "../services/Authenticator";

export class UserController {

  public signUp = async (req: Request, res: Response): Promise<void> => {
    try {
        const input:UserInputDTO = {
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email,
            password: req.body.password
        }

        const userBusiness = new UserBusiness()
        const token = await userBusiness.createUser(input)

        res.status(201).send({ message: "Usuário criado!", token })            
    } catch (error:any) {
        res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
    }
};    

  public login = async (req: Request, res: Response) => {

    try {
        const {email, password} = req.body

        const input: LoginInputDTO = {
            email, password
        };

        const userBusiness = new UserBusiness()
        const token = await userBusiness.login(input)

        res.status(200).send({token})
    } catch (error:any) {
        res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
    }

  };

  public getProfile = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string

      const authenticator = new Authenticator()
      const authenticationData = authenticator.getTokenData(token)

      const userBusiness = new UserBusiness()
      const user = await userBusiness.getProfile(authenticationData.id)

      res.status(200).send({id: user.id, email: user.email})
    } catch (error:any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
  }
  }

}