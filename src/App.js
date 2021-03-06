import './App.css';
import NavBar from './components/NavBar';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import ProjectPage from './components/ProjectPage';
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
          <Link to="/">
            Sam Markham
          </Link>
        </h1>
        <NavBar/>
      </header>
      <Switch>
        <Route exact path="/projects"><Projects/></Route>
        <Route path="/projects/:url" component={ProjectPage} />
        <Route path="/blog"><Blog/></Route>
        <Route path="/about"><About/></Route>
        <Route path="/contact"><Contact/></Route>
        <Route path="/"><Home/></Route>
      </Switch>
    </div>
  );
}

export default App;
