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


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Sam Markham
        </h1>
        <NavBar/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/projects"><Projects/></Route>
          <Route path="/blog"><Blog/></Route>
          <Route path="/resume"><Resume/></Route>
          <Route path="/about"><About/></Route>
          <Route path="/contact"><Contact/></Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
