import axios from 'axios';
import React, { useState } from 'react';
import{ useForm } from '../../hooks/useForm'
import { useRequestData } from '../../hooks/useRequestData';
import { MyOrderForm } from './style';

export default function Form() {
    const[visibleButtonClient, setVisibleButtonClient] = useState(true)

    const [form, onChange, restForm] = useForm({ client: "", product: "", qty: 1, deliveryDate: "" })

    const [dataClient, isLoadingClient, erroClient, upClient, setUpClient ] = useRequestData('http://localhost:3003/clients');

    const [dataProduct, isLoadingClient, erroProduct] = useRequestData('http://localhost:3003/products');

    const selectClient = !isLoadingClient && dataClient && dataClient.find((dClient) =>{
        return dClient.name === form.client;
    })

    //ADICIONAR CLIENTE
    const addClient = () =>{
        const body =
        {
            "name": form.client
        }
        axios.post('http://localhost:3003/client', body, {})
            .then((response) =>{
                setUpClient(!upClient);
                console.log(response)
            }).catch((error)=>{
                console.log(error.message)
            })
    }
    const selectClient = () =>{
        setVisibleButtonClient(!visibleButtonClient)
    }
    console.log(selectClient);


    return (
        <MyOrderForm>
            <div>
                {selectClient && !visibleButtonClient && <h1>Client:{selectClient.name}</h1>}

            </div>

           
            <div id='selec-client'>
                <label htmlFor='client' >Nome do Cliente </label>
                <input id="client" list='dataClient' name='client' onChange={onChange} value={form.client}></input>

                <datalist id='dataClient'>
                  {/* <option> Roberta</option>
                    <option> Paulo </option>
                    <option> José </option>
                    <option> Maria </option>
                 */} 
                    {isLoadingClient && !dataClient && <option>Carregando..</option>}
                    {!isLoadingClient && dataClient && dataClient.map((client)=>{
                        return <option key={client.id}>
                            {client.name}
                        </option>
                    })}
                </datalist>
                    {!selectClient && (form.client.length > 2) &&
                    <button type='button' onClick={()=>{addClient()}}>Cadastrar Cliente</button>}

                    {selectClient && visibleButtonClient &&
                    <button type='button' onClick={()=>{selectClient()}}>Confirmar</button>}        
            </div>
           
            <div id='select-product'>
                <label htmlFor='product' >Produto </label>
                <input id="product" list='dataProduct'></input>
                <datalist id='dataProduct'>
                   {/* <option> Banana </option>
                    <option> Mamão </option>
                    <option> Macã </option>
                    <option> Goiaba </option>
                  */}
                  {isLoadingProduct && !dataProduct && 
                  <option>Carregando..</option>}
                  {!isLoadingProduct && dataProduct && dataProduct.map((product)=>{
                    return <option key={product.id}>
                        {product.name}
                    </option>
                  })}
                </datalist>
                <label>Quantidade </label>
                <input id="qty" type={"number"}></input>
                <p>R$: 10000</p>
                <button>Ok</button>
            </div>
          
            <div id='order'>
                <label htmlFor='deliveryDate' >Data de entrega (DD/MM/AAAA) </label>
                <input id="deliveryDate" ></input>
                <button>Confirmar </button>
            </div>
        </MyOrderForm>
    );
}