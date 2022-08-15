import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components'

const ButtonHome = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top:40px;
    margin-right: 2px;
    height: 60px;
    font-family: Arial, sans-serif;

button{
        display: flex;
        padding: 10px;
        margin: 10px;
        font-family: Arial, sans-serif;
        background-color: #333;
        color: white;
        border-radius: 5px;

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
    background-color: #ccc;
    padding: 20px;
    font-size: 70%;
    box-shadow: 6px 8px 8px 0px #000;
`

function ListTripsPage() {

    const navigate = useNavigate()
    const voltaHomePage = () => {
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
                alert("Algo deu errado!!!")
            })
    }
    useEffect(() => {
        getTrips()
    }, [])

    const listTrips = trips.map((list) => {
        return (
            <Card className="Card">
                <p>Nome: {list.name}</p>
                <p>Descrição:{list.description}</p>
                <p>Planeta:{list.planet}</p>
                <p>Duração:{list.durationInDays}</p>
                <p>Data:{list.date}</p>
            </Card>
        )
    })
    return (
        <div className="GlobalStyles">
            <div>
                <ButtonHome className="ButtonHome">
                    <button onClick={voltaHomePage}>Home</button>
                </ButtonHome>
                <div>
                    <Title className="Title">
                        <h1>Embarque na nossa viagem</h1>
                   </Title>
                </div>
             
                <div className="Card">
                    <div class="card2">
                        <div class="card__content">
                            {listTrips}
                        </div>
                    </div>
                </div>
                <ButtonHome className="Button">
                    <button onClick={ApplicationFormPage}>Inscreva-se</button>
                </ButtonHome>
            </div>
        </div>

    );
}

export default ListTripsPage;

