import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";

const Game = (props) => {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

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
    return (
      <div className="Container">
        <div className="question">
          <h1>Lets begin the quiz</h1>
        </div>
    //index is to assign a unique key to each item within map.function
        {questions.map((question, index) => {
    // This is grabbing 
          return <QuestionCard key={index} question={question} />;
        })}
      </div>
    );
  }
};
export default Game;

