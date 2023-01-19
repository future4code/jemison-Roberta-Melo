import { MovieDatabase } from "../data/MovieDatabase"
import { v4 as generateId } from 'uuid'

export class MovieBusiness {
  async create({
    title,
    description,
    duration,
    year_release
  }: any):Promise<void> {
      if (!title || !description || !duration || !year_release) {
      throw new Error(
        "Dados inválidos (title, description, duration, year_release)"
        )
    }

    const id = generateId()

    const movieDatabase = new MovieDatabase()
    await movieDatabase.create({
      id,
      title,
      description,
      duration,
      year_release})
  }

  async getMovies():Promise<void> {
    const movieDatabase = new MovieDatabase()
    return await movieDatabase.getMovies()
  }
}