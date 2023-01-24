import { BaseDatabase } from "./BaseDatabase";
import { user } from "../model/user";
import { CustomError } from "../error/CustomError";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  async create({ id, name, email, password }: any): Promise<void> {
    await UserDatabase.connection
      .insert({
        id,
        name,
        email,
        password,
      })
      .into(UserDatabase.TABLE_NAME);
  }

  getAllUsers = async (): Promise<user[]> => {
    try {

      const result = await UserDatabase.connection(UserDatabase.TABLE_NAME).select()
      return result

    } catch (error: any) {
      throw new CustomError( error.statusCode, error.message)
    }
  }
}