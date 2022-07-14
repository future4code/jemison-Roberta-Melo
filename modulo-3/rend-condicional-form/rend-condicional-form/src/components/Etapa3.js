import React from 'react';
import Styled from 'styled-components';
import PerguntaAberta from './PerguntaAberta';
import PerguntaFechada from './PerguntaFechada';

const ContainerEtapa3 = Styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-bottom: 1rem;
`
const ContainerFormEtapa = Styled.form`
    display: flex;
    flex-direction: column;
    align-self: center;
    text-align: center;
    width: 200px;
`
export default class Etapa3 extends React.Component {

    state = {
        conclusao: ""
    }

    onChangeConclusao = (event) => {
        this.setState({ conclusao: event.target.value })
    }

    render() {

        return (
            <ContainerEtapa3>
                <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                <ContainerFormEtapa>
                    <PerguntaAberta label = {"5. Por que você não terminou um curso de graduação?"} />
                    <PerguntaFechada
                        label = {"6. Você fez algum curso complementar?"}
                        opcao1 = {"Não fiz curso complementar"}
                        opcao2 = {"Curso técnico"}
                        opcao3 = {"Curso de inglês"}
                    />
                </ContainerFormEtapa>
            </ContainerEtapa3>
        )
    }
}