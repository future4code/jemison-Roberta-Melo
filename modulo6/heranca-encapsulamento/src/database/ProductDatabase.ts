import { TProduct } from "../models/Product";
import { BaseDatabase } from "./BaseDataBase";
import { TABLE_PRODUCTS } from "./tableNames";

export class ProductDatabase extends BaseDatabase {

    protected static tableName = TABLE_PRODUCTS

    public getAllProducts = async () => {
        const result = await BaseDatabase.connection(ProductDatabase.tableName).select()
        return result
    }

    public createProduct = async (id: string, name: string, price: number) => {
        const product: TProduct = {id, name, price}
        await BaseDatabase.connection(ProductDatabase.tableName).insert(product)
    }

    public getProductById = async (id: string) => {
        const result = await BaseDatabase.connection(ProductDatabase.tableName).where('id', id)
        return result
    }
}