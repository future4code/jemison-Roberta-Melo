import './App.css';
import React, { useState, useEffect } from "react";

import Home from './components/Home/Home';
import TelaMatch from './components/TelaMatch/TelaMatch';
import styled from "styled-components";

const Button = styled.button`
  height: 6vh;
  width: 10vw;
  background-color: #fff; 
  border-radius: 15px;
  color: #000;
  margin-top: 2vw;
  border: 3px solid #b0a18f;

:hover {
  background-color: #dfcdb4;
  color: #fff;
}
`

function App() {
  const [page, setPage] = useState("page1")

  const changePage = () => {
    if (page === "page1") {
      setPage("page2");
    } else {
      setPage("page1");
    }
  }

  useEffect(() => {

  }, []);

  return (
    <div className="App">
      <main className='body'>
        <Button onClick={changePage}>Matches</Button>
        {page === "page1" ? <Home /> : <TelaMatch />}
      </main>
    </div>
  );
}

export default App;

