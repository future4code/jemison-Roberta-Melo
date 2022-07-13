import React from 'react';
import styled from 'styled-components';
import PerguntaAberta from './PerguntaAberta';

const ContainerEtapa2 = styled.div`
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

export default class Etapa2 extends React.Component {

    state = {
        curso: "",
        unidadeDeEnsino: ""
    }

    onChangeCurso = (event) => {
        this.setState({ curso: event.target.value })
    }

    onChangeUnidadeDeEnsino = (event) => {
        this.setState({ unidadeDeEnsino: event.target.value })
    }

    render() {
        return (
            <ContainerEtapa2>
                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <ContainerFormEtapa>
                    <PerguntaAberta label = {"5. Qual o curso?"} />
                    <PerguntaAberta label = {"6. Qual a unidade de ensino?"} />
                </ContainerFormEtapa>
            </ContainerEtapa2>
        )
    }
}