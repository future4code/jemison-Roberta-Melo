import { CustomError } from "./CustomError"

export class MissingUserId extends CustomError {
    constructor () {
        super(422, "Falta passar o id do usuário.")
    }
}

export class UserIdNotFound extends CustomError {
    constructor () {
        super(404, "ID do usuário não encontrado.")
    }
}

