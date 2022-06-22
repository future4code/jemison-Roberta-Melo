import logo from './img/logoLabenu.png'
import './App.css';

function App() {
  const titulo = 'Olá! Eu sou a Roberta!'
  const mandarMensagem =()=>{
    alert('O botão foi clicado!')
  }

  return (
    <div className="App">
      <h1>{titulo}</h1>
      <img src={logo} className="Logo-Labenu" alt="uma logo com as letras de cor laranja e cinza" />
      <p>Este é o meu primeiro site React</p>
      <button onClick={mandarMensagem}>Aperte este botão</button>
    
    </div>
  );
}

export default App;
