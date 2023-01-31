import User from "../model/User";
import BaseDataBase from "./BaseDataBase";

class UserDataBase extends BaseDataBase {


    public async createUser(User: User): Promise<void> {
        await this.getConnection()
        .insert(User)
        .into("User_31_01_2023")
        
    }

    public async getUserByEmail(email: string): Promise<any> {
       const result = await this.getConnection()
        .select("*")
        .where({email: email})
        .from("User_31_01_2023")

        return result
    }

    public async getUserByPassword(password: string): Promise<any> {
        const result = await this.getConnection()
        .select("*")
        .where({password: password})
        .from("User_31_01_2023")

        return result
    }

    public async getUserById(id: string): Promise<any> {
        const result = await this.getConnection()
        .select("*")
        .where({id: id})
        .from("User_31_01_2023")

        console.log(id)

        return result
    }
}


export default UserDataBase
