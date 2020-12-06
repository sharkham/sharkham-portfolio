import './App.css';
import NavBar from './components/NavBar';
import {
  Switch,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Resume from './components/Resume';
import About from './components/About';
import Contact from './components/Contact';
import Socials from './components/Socials';


function App() {
  return (
    <div className="App">
      {/* <div id="triangle-topleft"></div> */}
      <header className="App-header">
        <Socials/>
        <Resume/>
        <h1>
          Sam Markham
        </h1>
      </header>
      <NavBar/>
      <Switch>
        <Route path="/projects"><Projects/></Route>
        <Route path="/blog"><Blog/></Route>
        <Route path="/about"><About/></Route>
        <Route path="/contact"><Contact/></Route>
        <Route path="/"><Home/></Route>
      </Switch>
    </div>
  );
}

export default App;
