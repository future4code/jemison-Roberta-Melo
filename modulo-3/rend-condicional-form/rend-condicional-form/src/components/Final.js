import React from 'react';
import styled from 'styled-components';

const ContainerFinal = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-bottom: 1rem;
    text-align: center;
`
export default class Final extends React.Component {
    render() {
        return (
            <ContainerFinal>
                <h2>O FORMULÁRIO ACABOU</h2>
                <p>Muito obrigado por participar! Entraremos em contato!</p>
            </ContainerFinal>
        )
    }
}