import "./App.css";
import React from "react";
import Llistar from "./Llistar";
import Afegir from "./Afegir";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Cal que es recarreguin sols els canvis</p>
        <Llistar />
        <Afegir />
      </header>
    </div>
  );
}
export default App;
