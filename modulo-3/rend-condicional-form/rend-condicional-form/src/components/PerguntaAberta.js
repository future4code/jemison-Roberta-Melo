import React from 'react';
import styled from 'styled-components';

const Form = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`
const LabelForm = styled.label`
    padding-bottom: 1rem;
`

export default class PerguntaAberta extends React.Component{

    state = {
        valorInput: ""
    }

    onChangeValorInput = (event) =>{
        this.setState({valorInput: event.target.value})
    }

    render(){
        return(
        <Form>
            <LabelForm for="input">{this.props.label}</LabelForm>
            <input type = "text" id = "input" name = "input"                  
            value = {this.state.valorInput}
            onChange = {this.onChangeValorInput}
            />
        </Form>
        )
    }
}