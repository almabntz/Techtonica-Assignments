import './App.css';

//navbar code
import Navbar from './components/navBar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';

function App() {


  return (
    <div className="App">

<Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/AboutMe' element={<AboutMe/>} />
    </Routes>
    </Router>



           
        </div>
    );
}

export default App;