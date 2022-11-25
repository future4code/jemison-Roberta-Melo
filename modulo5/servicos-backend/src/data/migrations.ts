import { connection } from "./connection"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`
      CREATE TABLE IF NOT EXISTS ex_servicos_backend (
         id INT AUTO_INCREMENT PRIMARY KEY,
         nome VARCHAR(255) NOT NULL,
         cep VARCHAR(8) NOT NULL,
         logradouro VARCHAR(255) NOT NULL,
         numero VARCHAR(255) NOT NULL,
         complemento VARCHAR(255),
         bairro VARCHAR(255) NOT NULL,
         cidade VARCHAR(255) NOT NULL,
         estado VARCHAR(2) NOT NULL
      );
   `)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)


const closeConnection = () => { connection.destroy() }

createTables()
   .finally(closeConnection)