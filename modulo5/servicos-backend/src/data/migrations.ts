import { connection } from "./connection"


const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .schema.createTable('AddressInfo', (table) =>{ 
      table.string('CEP')
      table.string('Logradouro')
      table.string('Numero')
      table.string('Complemento')
      table.string('Bairro')
      table.string('Cidade')
      table.string('Estado')
   })
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

createTables()
  