import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    border: 3px solid #b0a18f; 
    border-radius: 10px;
    background-color: #fff; 
    margin: auto;
    height: 80vh;
    width: 30vw;
    justify-content: center;
    align-items: center;
    margin-top: 2vw;
    color: #000;
    font-family: Arial, sans-serif;
    box-shadow: -2px 1px 14px 0px rgba(50, 50, 50, 1);

    p {
        margin-right: 2vw;
        margin-left: 2vw;
        margin-top: 5px;
    }

    h1 {
        margin-bottom: 10px;
    }

    h3 {
        margin-bottom: 3px;
    }
    
    hr {
        width: 25vw;
    }
`

export const Image = styled.img`
    height: 40vh;
    width: 37vh;
    border-radius: 5px;
    box-shadow: -2px 1px 14px 0px rgba(50, 50, 50, 1); 
`

export const Buttons = styled.div`
    display: flex;
    justify-content: space-around;

    button{
        margin-left: 1vw;
        margin-right: 1vw;
        height: 5vh;
        width: 5vw;
        background-color: #dfcdb4;
        border-radius: 15px;
        border: none;
        //cursor:pointer;
    }

    button:hover {
        background-color: #b0a18f;
        cursor:pointer;
    }
`
