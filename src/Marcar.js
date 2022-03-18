export default function canviaentrada(id) {
  fetch(`https://tc-todo-2022.herokuapp.com/todos/${id}`, {
    method: "POST",
    completed: false,
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
/*  return (
    <div>
      <br />
      Marcar ToDo com a completat/no completat
      <br />
      <input type="submit" value="Submit" onClick={() => canviaentrada()} />
    </div>
  );
}*/
