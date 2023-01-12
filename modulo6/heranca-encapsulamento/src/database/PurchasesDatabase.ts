import { BaseDatabase } from "./BaseDataBase";
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames"
import { PurchaseDB } from "../models/Purchase";

export class PurchasesDatabase extends BaseDatabase {

    protected static tableUsers = TABLE_USERS
    protected static tableProducts = TABLE_PRODUCTS
    protected static tablePurchases = TABLE_PURCHASES

    public getPurchasesById = async (id: string) => {
        const result = await BaseDatabase.connection.raw(`
        SELECT
            ${PurchasesDatabase.tableUsers}.email,
            ${PurchasesDatabase.tableProducts}.name AS product_name,
            ${PurchasesDatabase.tableProducts}.price AS product_price,
            ${PurchasesDatabase.tablePurchases}.quantity AS product_quantity,
            ${PurchasesDatabase.tablePurchases}.total_price
        FROM ${PurchasesDatabase.tablePurchases}
        JOIN ${PurchasesDatabase.tableUsers}
        ON ${PurchasesDatabase.tablePurchases}.user_id = ${PurchasesDatabase.tableUsers}.id
        JOIN ${PurchasesDatabase.tableProducts}
        ON ${PurchasesDatabase.tablePurchases}.product_id = ${PurchasesDatabase.tableProducts}.id
        WHERE ${PurchasesDatabase.tablePurchases}.user_id = ${id};
        `)
        return result[0]
    }

    public createPurchase = async (
        id: string, 
        userId: string, 
        productId: string, 
        quantity: number, 
        totalPrice: number
        ) => {
        const purchase: PurchaseDB = {
            id: id, 
            user_id: userId, 
            product_id: productId, 
            quantity: quantity, 
            total_price: totalPrice
        }
        await BaseDatabase.connection(PurchasesDatabase.tablePurchases).insert(purchase)
    }
}