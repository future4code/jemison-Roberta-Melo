import { BaseDatabase } from "./BaseDatabase";
import { Movie } from "../types/Movie";

export class MovieDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_MOVIE";

  async create({
    id,
    title,
    description,
    duration,
    year_release}: any): Promise<void> {
    await MovieDatabase.connection
      .insert({
        id,
        title,
        description,
        duration,
        year_release})
      .into(MovieDatabase.TABLE_NAME);
  }

  async getMovies (): Promise<any> {
    return await MovieDatabase
    .connection(MovieDatabase.TABLE_NAME)
    .select()
  }
}

