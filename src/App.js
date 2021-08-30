import React, { Component } from 'react'
import './App.css';
import NavBar from './components/NavBar'
import ItemsContainer from './containers/ItemsContainer';
import CartItems from './containers/CartItems';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {

  state= {
    carted: []
  }

  render(){
    return (
      <Router>
      <div className="App">
        <h1>LeftHanded Marketplace</h1>
          <NavBar />
          <ItemsContainer />
      </div>
      </Router>
    );
  }
}


export default App;
