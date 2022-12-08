import { TUser } from "../models/User";
import { BaseDatabase } from "./BaseDataBase";
import { TABLE_USERS } from "./tableNames";

export class UserDatabase extends BaseDatabase {

    protected static tableName = TABLE_USERS

    public getAllUsers = async () => {
        const result = await BaseDatabase.connection(UserDatabase.tableName).select()
        return result
    }

    public createUser = async (
        id: string, 
        email: string, 
        password: string) => {
        const user: TUser = {id, email, password}
        await BaseDatabase.connection(UserDatabase.tableName).insert(user)
    }

    public getUserById = async (id: string) => {
        const result = await BaseDatabase.connection(UserDatabase.tableName).where('id', id)
        return result
    }
}