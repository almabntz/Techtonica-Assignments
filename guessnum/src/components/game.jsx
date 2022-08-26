import React, { useState } from "react";
import Result from "./results.jsx";

// creates use states for term and secret
const Game = () => {
  const [term, setTerm] = useState("");
  const [secret, setSecret] = useState("");
  const handleChange = (event) => {
    setTerm(event.target.value);
    console.log(event.target.value);
  };
  // get secret generates the random num. set secret IS ASSIGNED that num
  const getSecret = () => {
    setSecret(Math.floor(Math.random() * 20) + 1);
  };

  // getSecret() will populate a number very time it is clicked!

  return (
    <div>
      <div>
        <label htmlFor="term">Guess Number between 1 to 20</label>
      </div>
      <input
        id="term"
        type="text"
        name="term"
        value={term}
        onChange={handleChange}
      />
      <button onClick={getSecret}>click for a number</button>
      <Result term={term} secretNum={secret} />
    </div>
  );
};
// This is sending my game info out to App.JS
export default Game;
