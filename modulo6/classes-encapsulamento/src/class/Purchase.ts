export class Purchase {
    private id: string;
    private user_id: string;
    private product_id: string;
    private quantity: number;
    private total_price: number

    constructor(id: string, userId: string, productId: string, quantity: number, totalPrice: number) {
        this.id = id;
        this.user_id = userId;
        this.product_id = productId;
        this.quantity = quantity;
        this.total_price = totalPrice;
    }

    public getId() {
        return this.id
    }

    public getUserId() {
        return this.user_id
    }

    public getProductId() {
        return this.product_id
    }

    public getQuantity() {
        return this.quantity
    }

    public getTotalPrice() {
        return this.total_price
    }

    public setId(newId: string) {
        this.id = newId
    }

    public setUserId(newUserId: string) {
        this.user_id = newUserId
    }

    public setProductId(newProductId: string) {
        this.product_id = newProductId
    }

    public setQuantity(newQuantity: number) {
        this.quantity = newQuantity;
    }

    public setTotalPrice(newTotalPrice: number) {
        this.total_price = newTotalPrice
    }
}