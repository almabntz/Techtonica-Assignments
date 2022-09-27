import "./App.css";
import Header from "./components/Header";
import Users from "./components/users";
import Events from "./components/Events";
//import Footer from "./components/footer"; LOGIC NOT WRITTEN YET
import calendar from "./calendar.png";

import "./App.css";
/* */
function App() {
  return (
    <div className="App">
     <Header />
      <main>
        <div className="user-and-events">
         <Users />
         <Events />
          </div>

      
      </main>

      <footer>
        <div className="calendar-img">
          Star Calendar favicon made by
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>
          Find your own on
          <a href="https://www.flaticon.com/" title="Flaticon">
            FlatIcon.com
          </a>
        </div>
        <br></br>
      </footer>
    </div>
  );
}

export default App;