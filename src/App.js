import React, { Component } from 'react'
import './App.css';
import NavBar from './components/NavBar'
import ItemsContainer from './containers/ItemsContainer';
import CategoriesContainer from './containers/CategoriesContainer';
import CartItemsContainer from './containers/CartItemsContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CategoryFilterBar from './components/CategoryFilterBar';



class App extends Component {


  render(){
    return (
      <Router>
      <div className="App">
        <h1>LeftHanded Marketplace</h1>
          <NavBar />
        <Switch>
          <Route path='/products' component={(routerInfo) => <ItemsContainer routerInfo={routerInfo}/>} />
          <Route path='/cart' component={(routerInfo) => <CartItemsContainer routerInfo={routerInfo}/>} />
          <Route path='/categories' component={(routerInfo) => <CategoriesContainer routerInfo={routerInfo}/>} />
        </Switch>
      </div>
      </Router>
    );
  }
}



export default (App);
