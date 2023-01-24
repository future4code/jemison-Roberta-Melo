import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";
import { createMovieDTO } from "../model/createMovieDTO";

export class MovieController {
    async create(req: Request, res: Response):Promise<void> { 
        try {
            const input: createMovieDTO = {
                title: req.body.title,
                description: req.body.description,
                duration_in_minutes: req.body.duration_in_minutes,
                year_of_release: req.body.year_of_release
            } 

        const movieBusiness = new MovieBusiness();
        await movieBusiness.create({
            title: req.body.title,
            description: req.body.description,
            duration_in_minutes: req.body.duration_in_minutes,
            year_of_release: req.body.year_of_release });

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