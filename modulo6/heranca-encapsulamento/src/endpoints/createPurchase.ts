import { Request, Response } from "express"
//import connection from "../database/connection"
//import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames"
import { Product } from "../models/Product"
import { Purchase, PurchaseDB } from "../models/Purchase"
import { ProductDatabase } from "../database/ProductDatabase"
import { PurchasesDatabase } from "../database/PurchasesDatabase"
import { UserDatabase } from "../database/UserDatabase"

export const createPurchase = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userId = req.body.userId
        const productId = req.body.productId
        const quantity = req.body.quantity

        if (!userId || !productId || !quantity) {
            throw new Error("Body inválido.")
        }

        const findUser = new UserDatabase()
        const userFound = await findUser.getUserById(userId)

        if (userFound.length === 0) {
            errorCode = 404
            throw new Error("Usuário não encontrado.")
        }

        const findProduct = new ProductDatabase()
        const productFound = await findProduct.getProductById(productId)

        if (productFound.length === 0) {
            errorCode = 404
            throw new Error("Produto não encontrado.")
        }
        
        // const product: Product = {
        //     id: findProduct[0].id,
        //     name: findProduct[0].name,
        //     price: findProduct[0].price
        // }

        const product = new Product(
            productFound[0].id,
            productFound[0].name,
            productFound[0].price
        )

        // const newPurchase: Purchase = {
        //     id: Date.now().toString(),
        //     userId,
        //     productId,
        //     quantity,
        //     totalPrice: product.getPrice() * quantity
        // }

        const purchase = new Purchase(
            Date.now().toString(),
            userId,
            productId,
            quantity,
            product.getPrice() * quantity
        )

        const addPurchase = new PurchasesDatabase()
        await addPurchase .createPurchase(
             purchase.getId(),
             purchase.getUserId(),
             purchase.getProductId(),
             purchase.getQuantity(),
             purchase.getTotalPrice())
        

        res.status(201).send({ message: "Compra registrada", purchase: purchase })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}