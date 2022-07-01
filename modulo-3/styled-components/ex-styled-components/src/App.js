import React from 'react';
import Main from './components/Main/Main';
import { Footer } from './components/Footer/StyleFooter';
import Header from './components/Header/Header';
import styled from 'styled-components';

export const ContainerPrincipal = styled.container`
  display:flex;
  justify-content: center;
  background-color: orange;
  height: 100vh;
  
`

function App() {

  return (
    <ContainerPrincipal>

      <Header />
      <Main />
      <Footer />

    </ContainerPrincipal>
  )

}

export default App;