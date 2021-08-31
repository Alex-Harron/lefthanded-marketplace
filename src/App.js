import React, { Component } from 'react'
import './App.css';
import NavBar from './components/NavBar'
import ItemsContainer from './containers/ItemsContainer';
import CartItems from './containers/CartItemsContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends Component {


  render(){
    return (
      <Router>
      <div className="App">
        <h1>LeftHanded Marketplace</h1>
          <NavBar />
        <Switch>
          <Route path='/products' component={(routerInfo) => <ItemsContainer routerInfo={routerInfo}/>} />
        </Switch>
        <Route path='/cart' component={(routerInfo) => <CartItems routerInfo={routerInfo}/>} />
      </div>
      </Router>
    );
  }
}



export default (App);
