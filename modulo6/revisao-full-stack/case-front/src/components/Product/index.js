import React from 'react';
import { MyProduct } from './style';

export default function Product(){
    return(
        <MyProduct>
            <p>Mamão Papaia</p>
            <input type="number" />
            <p>R$ 15,00</p>
            <button>Remover</button>
        </MyProduct>
    );
}