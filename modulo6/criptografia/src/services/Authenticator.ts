import * as jwt from 'jsonwebtoken'
import { AuthenticationData } from "../model/authenticationData";

export class Authenticator {
    public generateToken = ({id}: AuthenticationData): string => {
        const token = jwt.sign(
            {id},
            process.env.JWT_KEY as string,
            {expiresIn: "30min"}
        )

        return token
    }

    getTokenData = (token: string): AuthenticationData => {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticationData
        return payload
    }
}