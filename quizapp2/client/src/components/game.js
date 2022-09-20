import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";
import Confetti from "react-confetti";
const Game = (props) => {
  const [questions, setQuestions] = useState([]); // stores all my questions
  const [error, setError] = useState(null); //error mesg catch all for when API doesnt load
  const [isLoaded, setIsLoaded] = useState(false); // for promise statement
  const [count, setCount] = useState(0); // keeps track of score

  //NEW CODE THAT MIGHT BREAK PAGE,
  const userCorrect = (answer) => {
    if (answer) {
    }
  };

  //this is fetching data from my API. error msg included.
  const loadData = () => {
    fetch("http://localhost:9090/api/game")
      .then((response) => response.json())
      .then((data) => {
        setIsLoaded(true);
        setError(error);
        console.log(data.results); //grabbing data from line 11
        setQuestions(data.results);
      });
  };

  //NEW CODE

  useEffect(() => {
    loadData();
  }, []);
  //error catching
  if (error) {
    return <div>error:{error.message}</div>;
  } else if (!isLoaded) {
    return <div>loading...</div>;
  } else {
    //this is what renders when on app.js
    return (
      <div className="Container">
        <div className="question">
          <h1>Lets begin the quiz</h1>
        </div>
        {questions.map((question, index) => {
          // index is to assign a unique key to each item within map.function
          return (
            <QuestionCard
              count={count}
              setCount={setCount}
              key={index}
              question={question}
            />
          );
        })}

        <div className="results-msg">
          <h3>Your Final Score {count}</h3>
          </div>
        
      </div>
    );
  }
};
export default Game;
// <Confetti />
//curently on line 41, have added a button, need to create function that will handle that submit action