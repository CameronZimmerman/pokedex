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

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className = "app">
          <Header />

          <Switch>
            <Route path="/pokedex">
              <Pokedex />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

}
