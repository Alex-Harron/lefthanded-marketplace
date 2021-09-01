import React, { Component } from 'react'
import './App.css';
import NavBar from './components/NavBar'
import ItemsContainer from './containers/ItemsContainer';
import CartItemsContainer from './containers/CartItemsContainer';
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
          <Route exact path='/' />
          <Route exact path='/products' component={(routerInfo) => <ItemsContainer routerInfo={routerInfo}/>} />
          <Route exact path='/cart' component={(routerInfo) => <CartItemsContainer routerInfo={routerInfo}/>} />
          <Route path="*" render={() => <h1 id="error">PAGE DOES NOT EXIST!</h1>} />
        </Switch>
      </div>
      </Router>
    );
  }
}



export default (App);
