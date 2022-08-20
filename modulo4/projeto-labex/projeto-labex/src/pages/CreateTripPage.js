import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useProtectedPage from '../Hooks/useProtectedPage';
import { Planets } from '../constants/planets';
import useForm from '../Hooks/useForm';
import styled from 'styled-components'


const GlobalStyles = styled.div`
    display:flex;
    justify-content: center;
    padding: 95px;
`
const Header = styled.div`
    margin: 30px;
    margin-top:-90px;
    justify-content: flex-start; 

    button{
        display: flex;
        padding: 10px;
        margin: 10px;
        font-family: Arial, sans-serif;
        color: white;
        border-radius: 5px;
        height: 50px;
    }
`
const ButtonCreate = styled.div`
   display: grid;
   justify-content:center;
   padding: 5px;
   margin: 10px;
   height: 40px;
   font-family: Arial, sans-serif;

    button{
        display: flex;
        padding: 10px;
        margin: 10px;
        font-family: Arial, sans-serif;
        background-color: #333;
        color: white;
        border-radius: 5px;
        height: 37px;
}
`
const Input = styled.div`
    display: grid;
    height: 40vh;
    width: 40vw;
    margin: 10px;
    padding: 10px;
    font-size: 15px;
`
const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`

function CreateTripPage() {
    useProtectedPage()
    const navigate = useNavigate()

    const goHomePage = () => {
        navigate("/")
    }

    const { form, onChange, clean } = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: "",
    })
    const create = (event) => {
        event.preventDefault()
        createTrip()
        clean()
    }

    const createTrip = () => {
        const headers = {
            headers: {
                "content-type": "application/json",
                "auth": localStorage.getItem("token")
            }
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/roberta-vieira-jemison/trips", form, headers)
            .then((response) => {
                alert("Viagem criada com sucesso!")

            }).catch((error) => {
                alert("Ocorreu um erro, tente novamente!")
            })

    }
    const getPlanet = Planets.map((planets) => {
        return <option key={planets} value={planets}>{planets}</option>
    })

    return (
        <GlobalStyles>
            <Header>
                <button onClick={goHomePage}>
                    <img src="https://cdn.icon-icons.com/icons2/1359/PNG/512/astronauthelmet_88899.png" width="40" height="35" alt="capacete astronauta" />
                </button>
            </Header>

            <form onSubmit={create}>
                <Title>
                    <h1>Preencher sua saída</h1>
                </Title>
                <Input>
                    <input
                        name={"name"}
                        placeholder="Nome"
                        type="name"
                        value={form.name}
                        onChange={onChange}
                    />
                    <select
                        name={"planet"}
                        value={form.planet}
                        onChange={onChange}
                        placeholder="Planet"
                    >
                        <option value="" disabled>Escolha um planeta</option>
                        {getPlanet}
                    </select>
                    <input
                        name={"date"}
                        placeholder="Data"
                        type={"date"}
                        value={form.date}
                        onChange={onChange}
                    />
                    <input
                        name={"description"}
                        placeholder="Descrição"
                        value={form.description}
                        onChange={onChange}
                    />
                    <input
                        name={"durationInDays"}
                        placeholder="Duração em dias"
                        value={form.durationInDays}
                        onChange={onChange}
                    />
                    <ButtonCreate>
                        <button>Criar</button>
                    </ButtonCreate>
                </Input>
            </form>
        </GlobalStyles>
    );
}
export default CreateTripPage;



