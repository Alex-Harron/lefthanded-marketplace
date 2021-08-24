import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
        <NavBar />
    </div>
    </Router>
  );
}

export default App;
