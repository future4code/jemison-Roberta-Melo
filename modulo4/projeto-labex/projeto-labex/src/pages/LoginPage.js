import '../App.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';


const GlobalStyles = styled.div`
    display: grid;
    height: 100vh;

    button{
        display: flex;
        padding: 10px;
        margin: 10px;
        font-family: Arial,sans-serif;
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
    display: flex;
    justify-content: flex-end;
    margin-top:40px ;
    margin-right: 55px;
    height: 60px;
    font-family: Arial, sans-serif;
`
const Login = styled.div`
    display: flex;
    justify-content: center;
    height: 300px;

h2{
   padding: 5px;
  }

input {
      display: flex;
      width: 30vw;
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
        font-family: Arial,sans-serif;
        background-color: #333;
        color: white;
        border-radius: 5px;

:hover {
        cursor: pointer;
        background-color: #ccc;
        color: #000;
        border: none;
    }
  }
`

function LoginPage() {
  const navigate = useNavigate()

  const goHomePage = () => {
    navigate("/")
  }
  const goAdminHomePage = () => {
    navigate("/trips/list")
  }

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }
  
  const login = () => {
    const body = {
      email: email,
      password: password
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/roberta-vieira-jemison/login", body)
      .then((response) => {
        alert("Login efetuado com sucesso!")
        localStorage.setItem("token", response.data.token)
        goAdminHomePage()
      })
      .catch((error) => {
        alert("Erro, insira login e senha novamente!")
        console.log(error)
      })
  }

  return (
    <GlobalStyles>
      <ButtonHome className="Button">
        <button onClick={goHomePage}>Home</button>
      </ButtonHome>
      <Login>
        <div>
          <h2>LOGIN</h2>
          <form onSubmit={login}>
            <input
              id="email"
              name="email"
              placeholder= "email"
              required
              type= "email"
              onChange={onChangeEmail}
              value={email}
            />

            <input
              id="password"
              name="password"
              placeholder= "senha"
              required
              type= "password"
              onChange={onChangePassword}
              value={password}
            />
          </form>
          <button onClick={login}>login</button>
        </div>
      </Login>
    </GlobalStyles>
  );
}

export default LoginPage;