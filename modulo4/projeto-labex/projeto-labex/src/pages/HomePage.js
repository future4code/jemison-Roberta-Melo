import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const GlobalStyles = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;  
    gap: 80px;   
`
const ContainerHome = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction:column;
    align-items: center;
`
const Title = styled.div`
  
    h1{
        align-items: center;
        justify-content: center;
        margin: 10px;
        color: #000;  
    } 
`

const Header = styled.div`
    height: 100px;
`

const Button = styled.div`
    display: flex;
    justify-content:center;
    gap: 30px;
    
    button{
        padding: 10px;
        margin-left: 10px;
        width: 20vw;
        font-family: Arial, sans-serif;
        background-color: #333;
        color: white;
        border-radius: 5px;
        border: none;
        font-weight: bold;

    :hover {
        cursor: pointer;
        background-color: #ccc;
        color: #000;
    }
}
`

function HomePage() {
    const navigate = useNavigate()
    const goToListTrips = () => {
        navigate("/trips/list")
    }
    const goLoginPage = () => {
        navigate("/login")
    }
    return (
        <GlobalStyles>
            <Header></Header>
            <ContainerHome>
                <Title>
                    <h1>Bem vindo a viagem</h1>
                </Title>
            </ContainerHome>
            <Button>
                <button onClick={goLoginPage}>Área Admin</button>
                <button onClick={goToListTrips}>Ver viagens</button>
            </Button>
        </GlobalStyles>
    );
}

export default HomePage;