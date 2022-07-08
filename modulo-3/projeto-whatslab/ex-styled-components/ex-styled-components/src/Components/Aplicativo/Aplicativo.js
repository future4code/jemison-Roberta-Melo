import React from 'react';
import styled from 'styled-components';

const ContainerConteudo = styled.div`
  display: flex;
  flex-direction: column;  
  height: 100vh;
  width: 600px;
  border: solid 1px #000;
  background-color: #f5f5f5;
`
const FooterInput = styled.div`
    display: flex;
    width: 100%;
    height: 30px;
    border: solid 1px orange;
`
const InputMaior = styled.input`
    display: flex;
    flex-grow: 1;
`
const ContainerVisualizacao = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-grow: 1;
`
const ContainerBalaoMensagem = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    background-color: #fff;
    height: auto;
    width: 200px;
    border-radius: 1rem;
    margin: 0.5rem 0 0.5rem 0.5rem;
    box-shadow: rgb(0, 0, 0, 13%) 0px 1px 0.5px;
`
const ContainerBalaoMensagemEu = styled.div`
    display: flex;
    align-self: flex-end;
    padding: 0 1rem;
    background-color: #ccffcc;
    color: #000;
    height: auto;
    width: 200px;
    border-radius: 1rem;
    margin: 0.5rem 0.5rem 0.5rem 0;
    box-shadow: rgb(0, 0, 0, 13%) 0px 1px 0.5px;
`
const ParagrafoNome = styled.p`
    font-weight: bold;
`

class Aplicativo extends React.Component {
    state = {
        mensagens: [
            {
                nome: "",
                conteudo: ""
            }
        ],
        inputNome: "",
        inputConteudo: ""
    }
    //FUNÇÃO ENVIAR MSG AO CLICAR NO BOTÃO Enviar
    enviaMensagem = () => {
        const novaMensagem = {
            nome: this.state.inputNome,
            conteudo: this.state.inputConteudo
        }
        const novasMensagens = [...this.state.mensagens, novaMensagem]

        this.setState({
            mensagens: novasMensagens
        })

        this.state.inputNome = ""
        this.state.inputConteudo = ""

        console.log("Mensagem enviada!")
    }

    //INPUT
    onChangeNome = (event) => {
        this.setState({ inputNome: event.target.value })
    }

    onChangeConteudo = (event) => {
        this.setState({ inputConteudo: event.target.value })
    }
    
    render() {

        const listaDeComponetesDeMensagens = this.state.mensagens.map((mensagem) => {
            if (mensagem.nome === "eu") {
                return (
                    <ContainerBalaoMensagemEu>
                        <p>{mensagem.conteudo}</p>
                    </ContainerBalaoMensagemEu>
                )
            } else if (mensagem.nome !== "") {
                return (
                    <ContainerBalaoMensagem>
                        <ParagrafoNome>{mensagem.nome}</ParagrafoNome>
                        <p>{mensagem.conteudo}</p>
                    </ContainerBalaoMensagem>
                )
            }
        })

        return (
            <ContainerConteudo>
                <ContainerVisualizacao>
                    {listaDeComponetesDeMensagens}
                </ContainerVisualizacao>

                <FooterInput>
                    <input
                        value={this.state.inputNome}
                        onChange={this.onChangeNome}
                        placeholder={"Nome"}
                    />
                    <InputMaior
                        value={this.state.inputConteudo}
                        onChange={this.onChangeConteudo}
                        placeholder={"Mensagem"}
                    />
                    <button onClick={this.enviaMensagem}><strong>Enviar</strong></button>
                </FooterInput>
            </ContainerConteudo>
        )
    }
}

export default Aplicativo;