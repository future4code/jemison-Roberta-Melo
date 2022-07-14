import React from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";
import styled from "styled-components";

const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
`

export default class App extends React.Component {
  state = {
    etapa: 1,
  }

  render() {
    let renderizaEtapa = <Etapa1 />
    const irParaProximaEtapa = () => {
      this.setState({ pagina: this.state.pagina + 1 })
    }
    switch (this.state.pagina) {
      case 2:
        renderizaEtapa = <Etapa2 />
        break;

      case 3:
        renderizaEtapa = <Etapa3 />
        break;

      case 4:
        renderizaEtapa = <Final />
        break;
    }

    return (
      <ContainerPrincipal>
        {renderizaEtapa}
        {this.state.pagina !== 4 ? <button onClick = {irParaProximaEtapa}>Próxima etapa</button> : true}
      </ContainerPrincipal>
    )
  }
}





