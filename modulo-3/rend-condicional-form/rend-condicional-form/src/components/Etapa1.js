import React from "react";
import styled from "styled-components"
import PerguntaAberta from './PerguntaAberta';
import PerguntaFechada from './PerguntaFechada';

const ContainerEtapa1 = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-bottom: 1rem;    
`

const ContainerFormEtapa = styled.form`
    display: flex;
    flex-direction: column;
    align-self: center;
    text-align: center;
    width: 200px;
`
export default class Etapa1 extends React.Component {
    state = {
        nome: "",
        idade: "",
        email: ""
    }

    onChangeNome = (event) => {
        this.setState({ nome: event.target.value })
    }

    onChangeIdade = (event) => {
        this.setState({ idade: event.target.value })
    }

    onChangeEmail = (event) => {
        this.setState({ email: event.target.value })
    }
    render() {

        return (
            <ContainerEtapa1>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <ContainerFormEtapa>
                    <PerguntaAberta label = {"1. Qual o seu nome?"} />
                    <PerguntaAberta label = {"2. Qual a sua idade?"} />
                    <PerguntaAberta label = {"3. Qual o seu e-mail?"} />
                    <PerguntaFechada
                        label = {"4. Qual a sua escolaridade?"}
                        opcao1 = {"Ensino médio incompleto"}
                        opcao2 = {"Ensino médio completo"}
                        opcao3 = {"Ensino superior incompleto"}
                        opcao4 = {"Ensino superio completo"}
                    />

                </ContainerFormEtapa>
            </ContainerEtapa1>
        )
    }
}
