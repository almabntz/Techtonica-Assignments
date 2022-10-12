import './App.css';
import { useState } from 'react';

//navbar code
import Navbar from './components/navBar';

//be sure to import all compenents so that the hotlink text will respond
//all pages listed below VVV
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import AddPost from './pages/AddPost';
import Favorite from './pages/favorite';

function App() {
const [view, setView] = useState("home")
//qiality of life code just listing my pages
//const pages = [ "home", "about", "addPost", "favorite"]


//this is the logic that is going to direct to my pages
//this is rendering my components and calling the functions contained within those pages
//There is a level of if statements that have been reduced here. 
//view is replacing these if statements and rendering select components based on what the user selects
  return (
    <div className="App"> 
    <Navbar setView = {setView} />
    {view === 'home' && <Home />}
    {view === 'aboutMe' && <AboutMe />}
    {view === 'addPost' && <AddPost />}
    {view === 'favorite' && <Favorite />}
        </div>
    );
}

export default App;