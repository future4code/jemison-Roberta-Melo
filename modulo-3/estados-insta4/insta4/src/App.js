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
return(
  <MainContainer>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />

          <Post
            nomeUsuario={'luizinho'}
            fotoUsuario={'https://i.ytimg.com/vi/-AMbVaYtwcE/maxresdefault.jpg'}
            fotoPost={'https://res.cloudinary.com/practicaldev/image/fetch/s--jIjY95PE--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://images.unsplash.com/photo-1529675641475-78780f1fd4b0%3Fixlib%3Drb-1.2.1%26ixid%3DeyJhcHBfaWQiOjEyMDd9%26auto%3Dformat%26fit%3Dcrop%26w%3D1350%26q%3D80'}
          />

          <Post
            nomeUsuario={'carlinhos'}
            fotoUsuario={'https://forum.macmagazine.com.br/uploads/monthly_2021_10/IMG_4234.thumb.jpg.ff57b0e831aeed1fb8ea4e66540c3b08.jpg'}
            fotoPost={'https://rc.am.br/galeria/arquivos/noticias/62745/big/6f158ab8f3be06619f584e36653dc5ca.jpg'}
          />
        </MainContainer>
)

}


export default App;
