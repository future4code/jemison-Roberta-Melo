import React from 'react'
import { useState } from "react"
import axios from 'axios';

function LoginPage(){
    return(
        <div>
        <h1>LOGIN</h1>
        <form>
            <input
                placeholder={"Email"}
                required
                type={"email"}
                onChange={onChangeEmail}
                value={email}
            />
            <input
                placeholder={"Senha"}
                required
                type={"password"}
                onChange={onChangePassword}
                value={password}
            />
        </form>
        <Buttons>
            <button onClick={goToHomePage}>Voltar</button>
            <button onClick={onSubmitLogin}>Entrar</button>
        </Buttons>
    </div>
    )
}
export default LoginPage;