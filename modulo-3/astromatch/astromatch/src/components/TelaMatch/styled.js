import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    border: 3px solid #b0a18f;
    margin: auto;
    margin-top: 2px;
    height: 80vh;
    width: 30vw;
    color: #000;
    font-family: Arial, sans-serif;
    border-radius: 10px;
    background-color: #fff; 
  
    button{
        margin: 0 auto;
        height: 5vh;
        width: 15vw;
        background-color: #dfcdb4;
        border-radius: 15px;
        border: none;
        color: #000;
    }

    button:hover {
        background-color: #b0a18f;
        color: #fff;
    }

    hr {
        width: 25vw;
    }
`
