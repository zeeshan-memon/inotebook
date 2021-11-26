import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Signup from './components/Signup';
import Login from './components/Login';
import NotesState from './Context/Notes/NotesState';
function App() {
 
  return (
    <>
    <NotesState>
    <Router>
    <Navbar/>  
    <div className="container">
    <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/signup">
            <Signup/>
          </Route>
        </Switch>
        </div>
    </Router>
    </NotesState>
    </>
  );
}

export default App;
