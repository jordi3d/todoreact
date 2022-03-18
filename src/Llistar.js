import { useState } from "react";

export default function Llistar() {
  const [tasques, setTasques] = useState([]);
  const [task, setTask] = useState([]);
  function canviaentrada(id) {
    fetch(`https://tc-todo-2022.herokuapp.com/todos/${id}`, {
      method: "GET",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => setTask(JSON.parse(JSON.stringify(json))));
    let newstatus = !task.completed;
    console.log("modificant el registre ", id, " amb ", newstatus);
    fetch(`https://tc-todo-2022.herokuapp.com/todos/${id}`, {
      method: "POST",
      body: JSON.stringify({
        completed: newstatus,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }).then((response) => response.json());
  }
  function showtasques() {
    fetch("https://tc-todo-2022.herokuapp.com/todos", {
      method: "GET",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => setTasques(JSON.parse(JSON.stringify(json))));
    let newArrayDataOfOjbect = Object.values(tasques);
    setTasques(newArrayDataOfOjbect);
  }
  return (
    <div>
      <label>Veure la llista de tasques:&nbsp;</label>
      <input type="submit" value="Submit" onClick={() => showtasques()} />
      <ul
        style={{
          listStyleType: "none",
          fontSize: "11px",
          textAlign: "left",
        }}
      >
        {tasques.map((tasca, index) => (
          <li key={tasca.id}>
            {index}:&nbsp;
            <input
              type="checkbox"
              value={tasca.completed}
              checked={tasca.completed ? "checked" : false}
              onChange={() => canviaentrada(tasca.id)}
            />
            &nbsp;Title={tasca.title}
            &nbsp;Details={tasca.details}
          </li>
        ))}
      </ul>
    </div>
  );
}
