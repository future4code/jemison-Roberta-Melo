import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//import { Card  } from "./styled";

import styled from 'styled-components'

const Card = styled.div`
    display: grid;
    align-items: center;
    margin: 100px;
    width: 220px;
    height: 210px;
    border-radius: 4px;
    background-color: #ccc;
    padding: 10px;
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
            <Card>
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
                <div className="ButtonHome">
                    <button onClick={voltaHomePage}>Home</button>
                </div>
                <div>
                    <div className="Title">
                        <h1>Embarque nas nossas Viagens</h1>
                    </div>
                </div>
                <div className="ButtonCreate">
                    <button onClick={ApplicationFormPage}>Inscrever-se</button>

                </div>
                <div className="Card">
                    <div class="card2">
                        <div class="card__content">
                            {listTrips}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ListTripsPage;

