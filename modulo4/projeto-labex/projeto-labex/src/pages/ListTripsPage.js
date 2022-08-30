import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const ButtonHome = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 40px;
    margin-right: 2px;
    height: 60px;
    font-family: Arial, sans-serif;

    button{
        display: flex;
        padding: 10px;
        margin: 10px;
        font-family: Arial, sans-serif;
        height: 40px;
        color: white;
        border-radius: 5px;
        background-color: #333;

    :hover {
        cursor: pointer;
        background-color: #ccc;
        color: #000;
    }
  }
`
const Title = styled.div`
    h1{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px;
        color: #000;  
    } 
`
const Card = styled.div`
    display: grid;
    align-items: center;
    margin: 10px;
    width: 220px;
    height: 210px;
    border-radius: 4px;
    background-color: #0ec0c1;
    padding: 20px;
    font-size: 70%;
    box-shadow: 6px 8px 8px 0px #000;
`
const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    margin: 15px;
`
const ButtonIns  = styled.div`
   display: flex;
    justify-content: flex-end;
    margin-top: 40px;
    margin-right: 2px;
    height: 50px;
    font-family: Arial, sans-serif;

    button{
        display: flex;
        padding: 10px;
        margin: 10px;
        font-family: Arial, sans-serif;
        height: 40px;
        color: white;
        border-radius: 5px;
        background-color: #333;

    :hover {
        cursor: pointer;
        background-color: #ccc;
        color: #000;
    }
  }
 `

function ListTripsPage() {
    const navigate = useNavigate()
    const goHomePage = () => {
        navigate("/")
    }
    const ApplicationFormPage = () => {
        navigate("/trips/application")
    }
    const [trips, setTrips] = useState([]);
    const getTrips = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/roberta-vieira-jemison/trips")
            .then((response) => {
                setTrips(response.data.trips)
            })
            .catch(() => {
                alert("Algo deu errado!")
            })
    }
    useEffect(() => {
        getTrips()
    }, [])

    const listTrips = trips.map((list) => {
        return (
            <Card>
                <p><strong>Nome:</strong> {list.name}</p>
                <p><strong>Planeta:</strong> {list.planet}</p>              
                <p><strong>Data:</strong> {list.date}</p>
                <p><strong>Descrição:</strong> {list.description}</p>
                <p><strong>Duração:</strong> {list.durationInDays}</p>
            </Card>
        )
    })
    return (
        <div className="">
            <div>
                <ButtonHome className="ButtonHome">
                    <button onClick={goHomePage}>Home</button>
                </ButtonHome>
                <div>
                    <Title className="Title">
                        <h1>Embarque na nossa viagem!</h1>
                    </Title>
                </div>
                <div className="Card">
                        <Box  className="Box">
                            {listTrips}
                        </Box>
                </div>
                <ButtonIns className="Button">
                    <button onClick={ApplicationFormPage}>Inscreva-se</button>
                </ButtonIns>
            </div>
        </div>
    );
}

export default ListTripsPage;

