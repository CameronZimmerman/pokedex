import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Header/Header.js';

import './App.css';
import Home from './Home/Home.js';
import Pokedex from './Pokedex/Pokedex.js';
import Details from './Details/Details.js';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className = "app">
          <Header />

          <Switch>
          <Route 
                path="/"
                exact
                render = {(routerProps) => <Home {...routerProps}/> }>
              
            </Route>
            <Route 
                path="/pokedex"
                exact
                render = {(routerProps) => <Pokedex {...routerProps}/> }>
              
            </Route>
            <Route 
                path="/pokedex/:pokemonName"
                exact
                render = {(routerProps) => <Details {...routerProps}/> }>
              
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

}
