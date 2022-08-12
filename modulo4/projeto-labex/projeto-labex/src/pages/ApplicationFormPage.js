import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useForm from "../Hooks/useForm";
import { Countries } from "../constants/countries";
import styled from 'styled-components';


const GlobalStyles = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    height: 100vh;
    display: flex;
    flex-direction: column;  
    color: white;
`
const ButtonHome = styled.div`
        display: flex;
        justify-content: flex-end;
        margin-top:55px ;
        margin-right: 55px;
        font-family: Arial, sans-serif;

    form {
       display: flex;
        width: 30vw;
        margin: 10px;
        padding: 10px;
        border: 1px solid black;
        border-radius: 5px;
        font-size: 1.5vw;
    }
`

function ApplicationFormPage() {
    const navigate = useNavigate()
    const voltaHomePage = () => {
        navigate("/")
    }
    const { form, onChange, cleanFields } = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: "",
        idViagem: "",
    })
    const cadastrar = (event) => {
        event.preventDefault()
        applyToTrips(form.idViagem)
        cleanFields()
    }
    const [trips, setTrips] = useState([])

    const applyToTrips = (id) => {
        const body = {
            "name": form.name,
            "age": form.age,
            "applicationText": form.applicationText,
            "profession": form.profession,
            "country": form.country,
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/roberta-vieira-jemison/trips/${id}/apply`, body)
            .then((response) => {

                alert("cadastrado com sucesso!")
            }).catch(() => {
                alert("ocorreu um erro, por favor tente novamente")
            })

    }
    useEffect(() => {
        const token = localStorage.getItem("token")
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/roberta-vieira-jemison/trips")
            .then((response) => {

                setTrips(response.data.trips)
            })
            .catch((error) => {
                alert("ocorreu um erro, por favor tente novamente!")
            })
    }, [])

    const getTrips = trips.map((list) => {

        return (
            <option key={list.id} value={list.id}>{list.name}</option>
        )
    })
    const getCountries = Countries.map((list) => {
        return (
            <option key={list} value={list}>{list}</option>
        )
    })

    return (
        <GlobalStyles>
            <div>
                <ButtonHome className="Button" >
                    <button onClick={voltaHomePage}>

                        <span>Home</span>
                    </button>
                </ButtonHome>
                <form onSubmit={cadastrar}>
                    <select
                        value={form.idViagem}
                        name={"idViagem"}
                        onChange={onChange}>
                        <option value=" disabled">Escolha sua viagem</option>
                        {getTrips}
                    </select>
                    <input
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        placeholder="Nome"
                    />
                    <input
                        name={"age"}
                        value={form.age}
                        onChange={onChange}
                        placeholder="Idade"
                    />
                    <input
                        name={"applicationText"}
                        value={form.applicationText}
                        onChange={onChange}
                        placeholder="Texto para candidatura"
                    />
                    <input
                        name={"profession"}
                        value={form.profession}
                        onChange={onChange}
                        placeholder="Pofissão"
                    />
                    <select
                        value={form.country}
                        name={"country"}
                        onChange={onChange}
                    >
                        <option value="" disabled>Escolha o seu país</option>
                        {getCountries}
                    </select>
                    <button>Enviar</button>
                </form>
            </div>
        </GlobalStyles>
    )
}

export default ApplicationFormPage;
