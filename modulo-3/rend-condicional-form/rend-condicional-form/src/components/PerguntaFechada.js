import React from 'react';
import styled from 'styled-components'

const Form = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`
const LabelForm = styled.label`
    padding-bottom: 1rem;
`

export default class PerguntaFechada extends React.Component{

    state = {
        valorInput: ""
    }

    onChangeValorInput = (event) =>{
        this.setState({valorInput: event.target.value})
    }

    render(){
        return(
            <Form>
                <LabelForm for="perguntaOpcoes">{this.props.label}</LabelForm>
                <select name="select" id="perguntaOpcoes">
                    <option value={this.props.opcao1}>{this.props.opcao1}</option>
                    <option value={this.props.opcao2}>{this.props.opcao2}</option>
                    <option value={this.props.opcao3}>{this.props.opcao3}</option>
                    <option value={this.props.opcao4}>{this.props.opcao4}</option>
                </select>
            </Form>      
        )
    }
}