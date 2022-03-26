import React from "react";
import { useRef } from "react";

const ENDPOINT = "https://tc-todo-2022.herokuapp.com/todos";

export default function Afegir({ onTascaAfegida }) {
  const inputRef = useRef();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const titol = inputRef.current.value;
        inputRef.current.value = "";
        fetch(ENDPOINT, {
          method: "POST",
          body: JSON.stringify({
            title: titol,
            details: "no hase falta desir nada más",
            completed: false,
          }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        })
          .then((response) => response.json())
          .then((json) => onTascaAfegida(json));
      }}
    >
      <label>Nova tasca:&nbsp;</label>
      <input type="text" id="titol" ref={inputRef} />
      <input type="submit" value="Afegir" />
    </form>
  );
}
