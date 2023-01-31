import knex, { Knex } from "knex"
import dotenv from "dotenv"

dotenv.config()

class BaseDataBase {
    private connection: Knex | null = null;

    protected getConnection() {
        if (!this.connection) {
            this.connection = knex({
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    user: process.env.DB_USER,
                    database: process.env.DB_SCHEMA,
                    password: process.env.DB_PASSWORD,
                    port: 3306
                }
            })
        }

        return this.connection
    }
}
export default BaseDataBase

