import { UserDatabase } from "../data/UserDatabase";
import {
  CustomError,
  InvalidEmail,
  InvalidName,
  InvalidPassword,
  InvalidRole,
  Unauthorized,
  UserNotFound,
} from "../error/customError";
import {
  UserInputDTO,
  user,
  EditUserInputDTO,
  LoginInputDTO,
  UpdateUserDTO,
  AuthenticationData,
} from "../model/user";
import { IdGenerator } from "../services/IdGenerator";
import { TokenGenerator } from "../services/TokenGenerator";

const idGenerator = new IdGenerator();
const tokenGenerator = new TokenGenerator();
const userDatabase = new UserDatabase();

export class UserBusiness {
  public createUser = async (input: UserInputDTO): Promise<string> => {
    try {
      const { name, nickname, email, password, role } = input;

      if (!name || !nickname || !email || !password || !role) {
        throw new CustomError(
          400,
          'Preencha os campos "name","nickname", "email", "password" e "role"'
        );
      }

      if (role.toUpperCase() !== "ADMIN" && role.toUpperCase() !== "NORMAL") {
        throw new InvalidRole();
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const id: string = idGenerator.generateId();

      const user: user = {
        id,
        name,
        nickname,
        email,
        password,
        role,
      };

      await userDatabase.insertUser(user);
      const token = tokenGenerator.generateToken({ id, role });

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: LoginInputDTO): Promise<string> => {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new CustomError(400, 'Preencha os campos"email" e "password"');
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const user = await userDatabase.findUser(email);

      if (!user) {
        throw new UserNotFound();
      }

      if (password !== user.password) {
        throw new InvalidPassword();
      }

      const token = tokenGenerator.generateToken({
        id: user.id,
        role: user.role,
      });

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public editUser = async (input: EditUserInputDTO) => {
    try {
      const { name, nickname, token } = input;

      if (!name || !nickname || !token) {
        throw new CustomError(
          400,
          'Preencha os campos "name", "nickname" e "token"'
        );
      }

      const data = tokenGenerator.tokenData(token);

      if (!data.id) {
        throw new Unauthorized();
      }

      if (data.role.toUpperCase() !== "ADMIN") {
        throw new Unauthorized();
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      const editUser: UpdateUserDTO = {
        id: data.id,
        name,
        nickname,
      };

      const userDatabase = new UserDatabase();
      await userDatabase.editUser(editUser);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getUserById = async (token: string) => {
    try {
      const tokenGenerator = new TokenGenerator();
      const authenticationData = tokenGenerator.tokenData(token);

      if (authenticationData.role.toUpperCase() !== "NORMAL") {
        throw new Unauthorized();
      }

      const userDatabase = new UserDatabase();
      const user = await userDatabase.getUserById(authenticationData.id);
      return user;
    } catch (err: any) {
      throw new Error(err.message);
    }
  };
}
