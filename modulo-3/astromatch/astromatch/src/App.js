import './App.css';
import React, { useState, useEffect } from "react";

import Home from './components/Home/Home';
import TelaMatch from './components/TelaMatch/TelaMatch';




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
    
    </div>
  );
}

export default App;

