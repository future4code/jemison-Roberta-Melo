import { CustomError } from "../errors/CustomError";
import { MissingUserId, UserIdNotFound } from "../errors/UserErros";
import { userById } from "../model/User";
import { UserRepository } from "../model/UserRepository";

export class UserBusiness {
  constructor(private userDatabase: UserRepository) {}

  public async getUserById(id: string): Promise<userById> {
    try {
      if (id === ":id") {
        throw new MissingUserId();
      }

      const result = await this.userDatabase.getUserById(id);

      if (!result) {
        throw new UserIdNotFound();
      }

      return result;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
}
