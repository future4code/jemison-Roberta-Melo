import React, { useState } from 'react';
import styled from 'styled-components';
import Post from './components/Post/Post';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  label {
   //screen reader only
   position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
  }
  input {
    padding: 10px 5px;
    border: 1px solid #000;
    border-radius: 15px;
    margin: 15px;
    width: 45%;
  }
  button {
    width: 100px;
    height: 35px;
    border-radius: 15px;
    padding: 8px;
    background-color: #ccc;
  }
  button:hover {
    color: #fff;
    background-color: #000;
    cursor: pointer;
  }
`
function App() {
  //ESTADOS
  const [inputNomeUsuario, setInputNomeUsuario] = useState("")
  const [inputFotoUsuario, setInputFotoUsuario] = useState("")
  const [inputFotoPost, setInputFotoPost] = useState("")

  const [listaPost, setListaPost] = useState([
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
  ])

  //EVENTOS
  const handleInputNomeUsuario = (event) => {
    setInputNomeUsuario(event.target.value)
  }

  const handleInputFotoUsuario = (event) => {
    setInputFotoUsuario(event.target.value)
  }

  const handleInputFotoPost = (event) => {
    setInputFotoPost(event.target.value)
  }
  //ADICIONAR POSTS
  const addPosts = (event) => {
    event.preventDefault();

    const novoPost = { nomeUsuario: inputNomeUsuario, fotoUsuario: inputFotoUsuario, fotoPost: inputFotoPost }
    const novaListaDePosts = [...listaPost, novoPost]
    setListaPost(novaListaDePosts)
  }

  const listaDeComponentesDePosts = listaPost.map((post, index) => {
    return (
      <Post key={index}
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
      />
    )
  })
  //console.log(listaDeComponentesDePosts)

  return (
    <MainContainer>

      <Form>
        <label>Usuário:</label>
        <input
          placeholder="Insira seu nome"
          value={inputNomeUsuario}
          onChange={handleInputNomeUsuario}
        />
        <label>Foto do perfil</label>
        <input
          placeholder="Inserir foto do usuário"
          value={inputFotoUsuario}
          onChange={handleInputFotoUsuario}
        />
        <label>Postagens</label>
        <input
          placeholder="Minhas postagens"
          value={inputFotoPost}
          onChange={handleInputFotoPost}
        />
        <button onClick={addPosts}>Compartilhar</button>
      </Form>
      {listaDeComponentesDePosts}

    </MainContainer> 
  )
}
export default App;
