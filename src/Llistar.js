import { useState } from "react";

export default function Llistar() {
  const [tasques, setTasques] = useState(); /*{
    id: "1",
    title: "Hola",
    completed: false,
  });*/
  function showtasques() {
    fetch("https://tc-todo-2022.herokuapp.com/todos", {
      method: "GET",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => setTasques(JSON.parse(JSON.stringify(json))));
  }
  return (
    <div>
      Mostrar la llista de ToDos
      <br />
      <label>Veure la llista de tasques:&nbsp;</label>
      <input type="submit" value="Submit" onClick={() => showtasques()} />
      <ul style={{ listStyleType: "none", fontSize: "12px" }}>
        <li>{JSON.stringify(tasques)}</li>
      </ul>
      {/*<ul>
        {tasques.map((tasca, index) => (
          <li key={tasca.id}>
            ID:{tasca.id}
            <br />
            Títol:{tasca.title}
            <br />
            Completada?:{tasca.completed}
          </li>
        ))}
        </ul>*/}
    </div>
  );
}
