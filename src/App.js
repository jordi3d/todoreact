import "./App.css";
import React from "react";
import { useEffect } from "react";
import Llistar from "./Llistar";
import Afegir from "./Afegir";

function App() {
  useEffect(() => {
    setInterval(() => {
      fetch("https://tc-todo-2022.herokuapp.com/todos", {
        method: "GET",
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }).then((response) => response.json());
    }, 5000);
  }, []);
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
