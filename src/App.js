import "./App.css";
import React from "react";
import Llistar from "./Llistar";
import Afegir from "./Afegir";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Llistar />
        <Afegir />
      </header>
    </div>
  );
}
export default App;
