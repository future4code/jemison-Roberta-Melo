import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames"
import { PurchasesDatabase } from "../database/PurchasesDatabase"

export const getUserPurchases = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id

       /* const [result] = await connection.raw(`
        SELECT
            ${TABLE_USERS}.email,
            ${TABLE_PRODUCTS}.name AS product_name,
            ${TABLE_PRODUCTS}.price AS product_price,
            ${TABLE_PURCHASES}.quantity AS product_quantity,
            ${TABLE_PURCHASES}.total_price
        FROM ${TABLE_PURCHASES}
        JOIN ${TABLE_USERS}
        ON ${TABLE_PURCHASES}.user_id = ${TABLE_USERS}.id
        JOIN ${TABLE_PRODUCTS}
        ON ${TABLE_PURCHASES}.product_id = ${TABLE_PRODUCTS}.id
        WHERE ${TABLE_PURCHASES}.user_id = ${id};
        `)*/

        const purchases = new PurchasesDatabase()
        const result = await purchases.getPurchasesById(id)

        res.status(200).send({ purchases: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}