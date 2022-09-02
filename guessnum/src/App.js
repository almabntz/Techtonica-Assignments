import logo from "./logo.svg";
import "./App.css";
import Game from "./components/game.jsx";

function App() {
  return (
  <div class = "wrap">
    <div className="gametext">
      <Game />
      <p>Your guesses so far...</p>
      <p id="wrongGuesses"></p>
    </div>
    </div>
  );
}

export default App;
