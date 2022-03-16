import { useRef } from "react";

export default function Afegir() {
  const inputRef = useRef();
  function novaentrada(titol) {
    console.log(titol);
    fetch("https://tc-todo-2022.herokuapp.com/todos", {
      method: "POST",
      body: JSON.stringify({
        title: titol,
        details: "què passa?",
        completed: false,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  return (
    <div>
      Afegir un nou ToDo amb un nou títol i com a no completat
      <br />
      <label>Títol de la Nova tasca:&nbsp;</label>
      <input type="text" id="titol" ref={inputRef} />
      <br />
      <input
        type="submit"
        value="Submit"
        onClick={() => novaentrada(inputRef.current.value)}
      />
    </div>
  );
}
