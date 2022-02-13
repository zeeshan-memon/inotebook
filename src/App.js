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
import Alert from './components/Alert';
import NotesState from './Context/Notes/NotesState';
import AlertState from './Context/alert/AlertState';
import NotesDetials from './components/NotesDetials';

function App() {
  return (
    <>
   <AlertState> 
   <NotesState>
    <Router>
    <Navbar/>
    <Alert/>
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
          <Route exact path="/notesdetails/:id">
            <NotesDetials/>
          </Route>
        </Switch>
        </div>
    </Router>
  </NotesState>
  </AlertState>
    </>
  );
}

export default App;
