import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import Afegir from "./Afegir";

const ENDPOINT = "https://tc-todo-2022.herokuapp.com/todos";

function App() {
  const [tasques, setTasques] = useState([]);
  const [task, setTask] = useState([]);

  useEffect(() => {
    fetch(ENDPOINT, {
      method: "GET",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => setTasques(JSON.parse(JSON.stringify(json))));
    const intervalID = setInterval(() => {
      fetch(ENDPOINT, {
        method: "GET",
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((response) => response.json())
        .then((json) => setTasques(JSON.parse(JSON.stringify(json))));
    }, 60000);
    return () => clearInterval(intervalID);
  }, []);

  function canviaentrada(id) {
    fetch(`${ENDPOINT}/${id}`, {
      method: "GET",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => setTask(JSON.parse(JSON.stringify(json))));
    let newstatus = !task.completed;
    console.log("modificant el registre ", id, " amb ", newstatus);
    fetch(`${ENDPOINT}/${id}`, {
      method: "POST",
      body: JSON.stringify({
        completed: newstatus,
      }),
    }).then((response) => response.json());
    showtasques(false);
  }
  function showtasques(filter) {
    fetch(ENDPOINT + `${filter ? "?completed=false" : ""}`, {
      method: "GET",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => setTasques(JSON.parse(JSON.stringify(json))));
    let newArrayDataOfOjbect = Object.values(tasques);
    setTasques(newArrayDataOfOjbect);
  }
  function Tasqueta({ tasca }) {
    return (
      <li className={tasca.completed && "completada" ? "completada" : ""}>
        <input
          type="checkbox"
          value={tasca.completed}
          checked={tasca.completed ? "checked" : false}
          onChange={() => canviaentrada(tasca.id)}
        />
        &nbsp;Title={tasca.title}
        &nbsp;Details={tasca.details}
      </li>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <label>Llista de tasques</label>
        <input
          type="submit"
          value="Filtrar només pendents"
          onClick={() => showtasques(true)}
        />
        <ul
          style={{
            listStyleType: "none",
            fontSize: "11px",
            textAlign: "left",
          }}
        >
          {tasques.map((tasca, index) => (
            <Tasqueta key={tasca.id} tasca={tasca} />
          ))}
        </ul>
        <Afegir onTascaAfegida={(tasca) => setTasques([...tasques, tasca])} />
      </header>
    </div>
  );
}
export default App;
