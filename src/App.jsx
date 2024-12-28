import React, { useRef } from "react";
import "./App.css";

function App() {
  const bulbRef = useRef(null);

  const turnOn = () => {
    if (bulbRef.current) {
      bulbRef.current.style.backgroundColor = "yellow";
    }
  };

  const turnOff = () => {
    if (bulbRef.current) {
      bulbRef.current.style.backgroundColor = "black";
    }
  };

  return (
    <div className="App">
      <h1> 10 Rs wala Bulb</h1>
      <div
        ref={bulbRef}
        className="bulb"
      ></div>
      <div className="buttons">
        <button onClick={turnOn}>ON</button>
        <button onClick={turnOff}>OFF</button>
      </div>
    </div>
  );
}

export default App;
