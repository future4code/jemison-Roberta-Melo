import { CustomError } from "../error/customError";
import { user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          nickname: user.nickname,
          email: user.email,
          password: user.password,
        })
        .into("Auth_users");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public findUserByEmail = async(email: string) => {
    try {
        const result = await UserDatabase.connection("Auth_users").select().where({email: email})

        return result[0]

    } catch (error: any) {
        throw new CustomError(400, error.message)
    }
  };

  public getProfile = async(id: string): Promise<user> => {
    const result = await UserDatabase.connection("Auth_users")
    .select()
    .where({id})

    return result[0]
  };
}