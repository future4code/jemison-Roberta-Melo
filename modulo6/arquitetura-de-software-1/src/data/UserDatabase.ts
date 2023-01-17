import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {

    public async createUser(id: string, email: string, name: string, password: string): Promise<void> {    
        try {
          await BaseDatabase.connection().insert({id, email, name, password}).into("User_Arq")

        } catch (error:any) {
          throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getAllUsers() {    
        try {
          return await BaseDatabase.connection().select().from("User_Arq")

        } catch (error:any) {
          throw new Error(error.sqlMessage || error.message)
        }
    }

    public async deleteUser(id: string): Promise<void> {    
        try {

            const idExists = await BaseDatabase.connection("User_Arq").select().where("id", id)

            if (idExists.length === 0) {
                throw new Error("Invalid user id.")
            }

            await BaseDatabase.connection("User_Arq").where("id", id).del()

        } catch (error:any) {
          throw new Error(error.sqlMessage || error.message)
        }
    }
}