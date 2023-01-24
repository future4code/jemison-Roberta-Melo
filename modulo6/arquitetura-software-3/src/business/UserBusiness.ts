import { UserDatabase } from "../data/UserDatabase";
import { createUserDTO } from "../model/createUserDTO";
import { generateId } from "../services/idGenerator";


export class UserBusiness {
  async create({ email, name, password }: createUserDTO):Promise<void> {
    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)")
    }

    const id = generateId()

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      name,
      email,
      password
    })
  }

}
