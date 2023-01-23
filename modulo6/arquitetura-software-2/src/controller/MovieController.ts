import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";

export class MovieController {
    async create(req: Request, res: Response):Promise<void> { 
        try {
            const {
                title,
                description,
                duration,
                year_release } = req.body;

        const movieBusiness = new MovieBusiness();
        await movieBusiness.create({
            title,
            description,
            duration,
            year_release });

        res.status(201).send({ message: "Filme cadastrado com sucesso" });
        } catch (error: any) {
        res.status(400).send(error.message);
        }
    }

    async getMovies(req:Request, res:Response):Promise<void> {
        try {
            const movieBusiness = new MovieBusiness()
            const result = await movieBusiness.getMovies()

            res.status(201).send(result)
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }
}