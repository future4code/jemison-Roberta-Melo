import styled from "styled-components";

export const Tela = styled.div`
    display: flex;
    flex-direction: column;

    margin: 100px auto;
    padding: 10px;
    border: 2px solid #000;
    border-radius: 10px;

    width: 50%;
`

export const ListaUsuario = styled.li`
    display: flex;
    align-items: center;

    list-style: none;
    text-align: left;
    font-weight: bold;
`

export const FormUser = styled.form`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr ;
    row-gap: 2vh;
    
    margin-top: 3vh;
    
    text-align: center;
    
    input {
        grid-column-start: 1;
        grid-column-end: 3;
        
        padding: 0.3vh 0.5vw;
        border: 1px solid black;
        border-radius: 5px;
        
        font-size: 1.5vw;
    }

`

export const ButtonAdd = styled.button`
    padding: 10px;
    border: none;
    border-radius: 5px;
    
    background-color: #333;
    color: white;
    
    font-weight: bold;
    
    text-transform: uppercase;

    :hover {
        cursor: pointer;
        background-color: #0a8967;
    }
`

export const ButtonDelete = styled.button`
    margin-left: 10px;
    padding: 10px;
    border: none;
    border-radius: 5px;
  
    background-color: #333;
    color: white;
    
    font-weight: bold;
    
    text-transform: uppercase;

    :hover {
        cursor: pointer;
        background-color: red;
    }
`