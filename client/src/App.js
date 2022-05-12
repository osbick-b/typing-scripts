import React from "react";
import { useState, useEffect } from "react";

import './App.css';

function App() {
const [name, setName]  = useState(null);

useEffect(() => {
  fetch("/api")
  .then((resp) => resp.json())
  .then((data) => {
      console.log("data", data);
      setName(data.name)
  })
  .catch((err) => {
      console.log(`>>> Error in route`, err);
  });
}, []);


  //--- component
  return (
    <div className="App">
      <h1>Hey {!name? "you" : name} </h1>
    </div>
  );
}

export default App;
