import { CustomError } from "../errors/CustomError";
import { userById } from "../model/User";
import { UserRepository } from "../model/UserRepository";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase implements UserRepository {
  TABLE = "User_Arq";

  getUserById = async (id: string): Promise<userById | undefined> => {
    try {
      const result = await BaseDatabase.connection(this.TABLE)
        .select("id", "name", "email", "role")
        .where({ id });
      return result[0];
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  }
}
