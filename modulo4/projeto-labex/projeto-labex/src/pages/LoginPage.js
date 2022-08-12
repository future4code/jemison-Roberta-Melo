import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components'


const GlobalStyles = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    height: 100vh;
    display:grid;
    
`
const ButtonHome = styled.div`
display: flex;
justify-content: flex-end;
margin-top:55px ;
margin-right: 55px;
height: 45px;
font-family: Arial;
`
const Login = styled.div`
display: flex;
justify-content: center;
height: 300px;

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
        background-color: #8a6a6b;
        color: #000;
    }
  }
`

function LoginPage() {
  const navigate = useNavigate()

  const voltaHomePage = () => {
    navigate("/")
  }
  const goAdminHomePage = () => {
    navigate("/admin/trips/list")
  }

  const [email, setEmail] = useState("")

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const [password, setPassword] = useState("")

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
        alert("Erro, insira login e senha!")
        console.log(error)
      })
  }

  return (
    <GlobalStyles>
      <ButtonHome className="Button">
        <button onClick={voltaHomePage}>Home</button>
      </ButtonHome>
      <Login>
        <div>
          <h2>LOGIN</h2>
          <form>
          
            <input 
                placeholder={"email"}
                required
                type={"email"}
                onChange={onChangeEmail}
                value={email}
               />
          
            <input
              placeholder={"senha"}
              required
              type={"password"}
              onChange={onChangePassword}
              value={password}
               />
         </form>
    
          <button onClick={login}>login</button>
      
        </div>
      </Login>
    </GlobalStyles>
  )
}

export default LoginPage;