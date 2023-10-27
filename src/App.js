import logo from './platzi.webp';
import './App.css';

// component
function App() {
  return (
    <div className="App">
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendamos React
        </a>
      </header>
    </div>
  );
}

function TodoItem(){
  return (
    <li>
      <span>V</span>
      <p>Llorar con la Llorona</p>
      <span>X</span>
    </li>
  );
}


function TodoCount(){
  return(
    <h1>
      You completed
      3 of
      5 TO DO'S
    </h1>
  )
}

export default App;
