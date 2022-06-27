import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fcgh17-1.fna.fbcdn.net/v/t1.18169-9/21687532_284878135349141_887502493646700587_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=pCVh2xbf0j4AX9DBSAn&tn=UiMvi3or7uWrGA0z&_nc_ht=scontent.fcgh17-1.fna&oh=00_AT_JjYlyqwJDp9Ee6LlYl6QG4INzNudp-fFj6WX2dNdBYQ&oe=62D86873" 
          nome="Roberta" 
          descricao="Oi, eu sou a Roberta. Sou aluna da turma Jemison Labenu. Cursei o técnico de informática e, através da formação, foi a onde cheguei na graduação de Sistemas para Internet. A oportunidade na área digital é tão grande que cada vez mais invisto no meu futuro."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      
      <section className="containerDisplayFlex">
        <CardPequeno
          imagem ="https://cdn-icons-png.flaticon.com/512/1782/1782765.png"
          titulo ="Email:"
          texto ="roberta.vieirademelo@yahoo.com.br"
        />

        <CardPequeno
          imagem ="https://cdn-icons-png.flaticon.com/512/1239/1239525.png"
          titulo ="Endereço:"
          texto ="Rua Rio de Janeiro"
        />
       </section>
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://logodownload.org/wp-content/uploads/2019/03/nasa-logo-0-768x768.png" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
