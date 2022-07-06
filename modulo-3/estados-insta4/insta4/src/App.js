import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {

  const arrayDePostagem = [
    {
      nomeUsuario: "Paula",
      fotoUsuario: "https://picsum.photos/50/53",
      fotoPost: "https://picsum.photos/200/153"
    },
    {
      nomeUsuario: "Luiz",
      fotoUsuario: "https://picsum.photos/50/54",
      fotoPost: "https://picsum.photos/200/154"
    },
    {
      nomeUsuario: "Carlos",
      fotoUsuario: "https://picsum.photos/50/55",
      fotoPost: "https://picsum.photos/200/155"
    }
  ]

  const pessoas = arrayDePostagem.map((pessoa, index) => {
    return (
      <Post key={index}
        nomeUsuario = {pessoa.nomeUsuario}
        fotoUsuario = {pessoa.fotoUsuario}
        fotoPost = {pessoa.fotoPost}
      />
    )
  })

  console.log(pessoas)
  

  return (
    <MainContainer>
      {pessoas}
    </MainContainer>
  )
}

export default App;
