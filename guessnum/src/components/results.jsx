import React from "react";

//const prevGuessesRef = useRef();
// term is user guesses, secretNum is the chosen secret number
const Result = ({ term, secretNum }) => {
  let result;
  console.log(secretNum);
  if (term) {
    if (secretNum == term) {
      result = "Congrats! you got it!";
    } else if (secretNum < term) {
      result = "You guessed too high";
    } else {
      result = "You guessed too low";
    }
  }
  return <h3>{result}</h3>;
};

export default Result;
