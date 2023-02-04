import jwt from 'jsonwebtoken'
import dotenv  from 'dotenv'
import { AuthenticationData } from '../types/AuthenticationData'

dotenv.config()


class Authenticator {
     
    generateToken(id: AuthenticationData){
       const token = jwt.sign({
        id
       },
       process.env.JWT_KEY as string,
       
       {
        expiresIn: process.env.EXPIRES_IN 
       }
       )

       return token
    }

    verifyToken(token: string) {
        const verify: any = jwt.verify(token, process.env.JWT_KEY as string)

        return verify.id
    }
}

export default Authenticator