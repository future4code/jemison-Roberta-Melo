import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'


const GlobalStyles = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    height: 100vh;
    display: flex;
    flex-direction: column;  
    color: white;
    gap: 80px;   
`
const ContainerHome = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction:column;
    align-items: center;
`
const Title = styled.div`
    display: flex;
    flex-direction:column;
  
    h1{
        align-items: center;
        justify-content: center;
        margin: 10px;
        color: #000;  
    } 
`
const Header = styled.div`
 height: 100px;

    h1{
        font-size: 30px;
        font-family: Arial, sans-serif;
        margin-left: 55px ;
}
`
const Button = styled.div`
display: flex;
flex-direction:row;
gap: 30px;
justify-content:center;

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
            background-color: #8a6a6b;
            color: #000;
    }
}
`

function HomePage() {
    const navigate = useNavigate()
    const goToListTrips = () => {
        navigate("/trips/list")
    }
    const irLoginPage = () => {
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
                <button onClick={irLoginPage}>Área Admin</button>
                <button onClick={goToListTrips}>Ver viagens</button>
            </Button>
        </GlobalStyles>
    )
}

export default HomePage;