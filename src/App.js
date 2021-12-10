import React, { useEffect, useState } from "react";
import "./App.css";
import Character from "./components/Character";
import axios from "axios";

const App = () => {
  const [characters, setCharacter] = useState([]);
  const [er, setEr] = useState("");
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then((response) => {
        setCharacter(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        setEr("attempt Failed !!");
      });
  }, []);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
};

export default App;
