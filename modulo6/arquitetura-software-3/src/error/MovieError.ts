import { CustomError } from "./CustomError";

export class InvalidMovie extends CustomError {
    constructor(){
        super(400, "Este filme não foi encontrado");

    }
}
