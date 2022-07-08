import React from 'react';
import Aplicativo from './Components/Aplicativo/Aplicativo';
import styled from 'styled-components'

const ContainerPrincipal = styled.body`
  display:flex;
  justify-content: center;
  background-color: #e6ffe6;
`
class App extends React.Component {
  render() {
    return (
      <ContainerPrincipal>

        <Aplicativo />

      </ContainerPrincipal>
    )
  }
}

export default App;