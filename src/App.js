import "./App.css";
import Llistar from "./Llistar";
import Afegir from "./Afegir";
import Marcar from "./Marcar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Llistar />
        <p>Es recarreguen sols els canvis</p>
        <Afegir />
        <Marcar />
      </header>
    </div>
  );
}

export default App;
