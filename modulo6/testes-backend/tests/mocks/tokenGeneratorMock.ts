import { ITokenGenerator } from "../../src/business/ports"
import { userRoles } from "../../src/model/User"
import { AuthenticationData } from "../../src/services/tokenGenerator"

export class tokenGeneratorMock implements ITokenGenerator{
    public generate = jest.fn(()=> {
        return "token"
    })

    public verify = jest.fn(()=> {
        return {id: "id", role: userRoles.NORMAL}
    }) 
}