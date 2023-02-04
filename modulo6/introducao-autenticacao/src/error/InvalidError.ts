import { BaseError } from "./BaseError";

export class InvalidError extends BaseError{
    constructor(){
        super("As credenciais estao incorretas", 401)
    }
}