import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";

const Game = (props) => {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  //NEW CODE THAT MIGHT BREAK PAGE,
  //CREATING COUNTER AND SCORE
  const [count, updateCount] = useState(0);
  // const [showScore, setShowScore] = useState();

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

  useEffect(() => {
    loadData();
  }, []);

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
          return <QuestionCard key={index} question={question} />;
        })}

        <div className="results-msg">
          <h3>Your Final Score</h3>
        </div>
      </div>
    );
  }
};
export default Game;

//curently on line 41, have added a button, need to create function that will handle that submit action
