import { MovieDatabase } from "../data/MovieDatabase";
import { createMovieDTO } from "../model/createMovieDTO";
import { generateId } from "../services/idGenerator";

export class MovieBusiness {
  async create({
    title,
    description,
    duration_in_minutes,
    year_of_release
  }: createMovieDTO):Promise<void> {
      if (!title || !description || !duration_in_minutes || !year_of_release) {
      throw new Error(
        "Dados inválidos (title, description, duration_in_minutes, year_of_release)"
        )
    }

    const id = generateId()

    const movieDatabase = new MovieDatabase()
    await movieDatabase.create({
      id,
      title,
      description,
      duration_in_minutes,
      year_of_release})
  }

  async getMovies():Promise<void> {
    const movieDatabase = new MovieDatabase()
    return await movieDatabase.getMovies()
  }
}