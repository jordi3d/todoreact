import React from "react";
import { useRef } from "react";

export default function Afegir() {
  const inputRef = useRef();
  function novaentrada(titol) {
    console.log(titol);
    fetch("https://tc-todo-2022.herokuapp.com/todos", {
      method: "POST",
      body: JSON.stringify({
        title: titol,
        details: "no hase falta desir nada más",
        completed: false,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  return (
    <div>
      <label>Títol de la Nova tasca:&nbsp;</label>
      <input type="text" id="titol" ref={inputRef} />
      <br />
      <input
        type="submit"
        value="Afegir"
        onClick={() => novaentrada(inputRef.current.value)}
      />
    </div>
  );
}
