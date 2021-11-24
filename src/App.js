import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotesState from './Context/Notes/NotesState';
function App() {
 
  return (
    <>
    <NotesState>
    <Router>
    <Navbar/>  
    <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
    </Router>
    </NotesState>
    </>
  );
}

export default App;
