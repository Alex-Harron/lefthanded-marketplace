import React, { Component } from 'react'
import './App.css';
import NavBar from './components/NavBar'
import ItemsContainer from './containers/ItemsContainer';
import CartItemsContainer from './containers/CartItemsContainer';
import AboutUs from './components/AboutUs';
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
        <div >
          <NavBar />
        <Switch>
          <Route exact path='/' component={(routerInfo) => <ItemsContainer routerInfo={routerInfo}/>} />
          <Route path='/categories' component={(routerInfo) => <ItemsContainer routerInfo={routerInfo}/>} />
          <Route exact path='/cart' component={(routerInfo) => <CartItemsContainer routerInfo={routerInfo}/>} />
          <Route path='/about-us' component={(routerInfo) => <AboutUs routerInfo={routerInfo}/>} />
          <Route path="*" render={() => <h1 id="error">PAGE DOES NOT EXIST!</h1>} />
        </Switch>
        </div>
      </div>
      </Router>
    );
  }
}



export default (App);
