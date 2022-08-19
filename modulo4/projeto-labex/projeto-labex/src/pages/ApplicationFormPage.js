import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useForm from "../Hooks/useForm";
import { Countries } from "../constants/countries";
import styled from 'styled-components';

const GlobalStyles = styled.div`
    display:flex;
    justify-content: center;
    padding: 95px;

    select{
      display: flex;
      width: 41.6vw;
      margin: 5px;
      padding: 10px;
      border: 1px solid black;
      border-radius: 5px;
      font-size: 15px;
    }

    input {
      display: flex;
      width: 40vw;
      margin: 5px;
      padding: 10px;
      border: 1px solid black;
      border-radius: 5px;
      font-size: 15px;
    }
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
const ButtonHome = styled.div`
        display: grid;
        justify-content: flex-start;
        margin-top: 40px;
        margin-right: 2px;
        height: 60px;
        font-family: Arial, sans-serif;
`

function ApplicationFormPage() {
    const navigate = useNavigate()
    const goHomePage = () => {
        navigate("/")
    }
    const { form, onChange, clean } = useForm({
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
        clean()
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
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/roberta-vieira-jemison/trips/:id/apply", body)
            .then((response) => {
                alert("Cadastrado com sucesso!")
            }).catch((error) => {
                alert("Ocorreu um erro, por favor tente novamente!")
            })
    }
    useEffect(() => {
        const token = localStorage.getItem("token")
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/roberta-vieira-jemison/trips")
            .then((response) => {
                setTrips(response.data.trips)
            })
            .catch((error) => {
                alert("Ocorreu um erro, por favor tente novamente!")
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
                <ButtonHome className="Button">
                    <button onClick={goHomePage}>Home</button>
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
                        required
                    />
                    <input
                        name={"age"}
                        value={form.age}
                        onChange={onChange}
                        placeholder="Idade"
                        required
                    />
                    <input
                        name={"applicationText"}
                        value={form.applicationText}
                        onChange={onChange}
                        placeholder="Texto para candidatura"
                        required
                    />
                    <input
                        name={"profession"}
                        value={form.profession}
                        onChange={onChange}
                        placeholder="Profissão"
                        required
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
    );
}

export default ApplicationFormPage;
