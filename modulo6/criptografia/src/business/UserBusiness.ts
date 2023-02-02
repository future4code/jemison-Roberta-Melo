import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidPassword, UserNotFound } from "../error/customError";
import {
  UserInputDTO,
  user,
  LoginInputDTO,
} from "../model/user";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";


const idGenerator = new IdGenerator()
const userDatabase = new UserDatabase()
const hashManager = new HashManager()
const authenticator = new Authenticator()

export class UserBusiness {
  public createUser = async (input: UserInputDTO) => {
    try {
        const { name, nickname, email, password } = input

        if (
           !name ||
           !nickname ||
           !email ||
           !password
        ) {
           throw new CustomError(400, 'Preencha os campos "name","nickname", "email" e "password"')
        }

        if (password.length < 6) {
            throw new InvalidPassword()
        }

        if (!email.includes("@")) {
            throw new InvalidEmail()
        }

        const id: string = idGenerator.generateId()

        const cypherPassword = await hashManager.hash(password)

        await userDatabase.insertUser({
           id,
           name,
           nickname,
           email,
           password: cypherPassword
        })

        const authenticator = new Authenticator
        const token = authenticator.generateToken({id})

        return token

    } catch (error:any) {
        throw new CustomError(error.statusCode, error.message);
    }
  };

  public login = async(input: LoginInputDTO) => {
    try {

    const {email, password} = input

    if (!email || !password
     ) {
        throw new CustomError(400, 'Preencha os campos "email" e "password"')
     }

     if (password.length < 6) {
        throw new InvalidPassword()
     }

     if (!email.includes("@")) {
        throw new InvalidEmail()
     }

     const user = await userDatabase.findUserByEmail(email);

     if (!user) {
      throw new UserNotFound()
     }

     const passwordIsCorrect = await hashManager.compare(password, user.password)

     if (!passwordIsCorrect) {
      throw new InvalidPassword()
     }

     const token = authenticator.generateToken({id: user.id})

     return token

 } catch (error:any) {
    throw new CustomError(error.statusCode, error.message);
 }

  };

  public getProfile = async(id: string): Promise<user> => {
    try {

      const result = await userDatabase.getProfile(id)

      return result
    } catch (error:any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
}