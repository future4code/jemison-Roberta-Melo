import React from 'react';
import { MyProduct } from './style';

export default function Product({ product, productList, setProductList, removeProduct}){
    const updateQuantidade = (e) =>{
        console.log(product.qty_stock);
        const currentQty = e.target.value;
        const productsUpdate = productList.map((p) =>{
            if(p.id === product.id){
                p.qty = currentQty;
            }
            return p
        })
        setProductList(productsUpdate);
    }
    return(
        <MyProduct>
            <p>{product.name}</p>
            <input id="qty" type={"number"} name="qty" min="0" max={(product.qty_stock.toString())} value={product.qty} onChange={updateQuantidade}></input>
            <p>{parseFloat(product.pirce * product.qty).toFixed(2)}</p>
            <button type='button' onClick={() => { removeProduct(product.id) }}>Remover</button>
        </MyProduct>
    );
}