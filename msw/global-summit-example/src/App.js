import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL + "/animals")
      .then((res) => res.json())
      .then(setAnimals);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Animals</h2>
        {animals.map((animal) => (
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mb-3 p-4 text-left">
            <h5>ID: {animal.id}</h5>
            <h4>Type: {animal.type}</h4>
            <h5>Species: {animal.species}</h5>
          </div>
        ))}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
