import React from 'react';
import './App.css';

import Home from './components/Home'
import BrowsePage from './components/BrowsePage'
import Boris from './components/HeroPage/Boris'
import Create from './components/Create'

import Navigation from './components/Navbar'
import { Route, Switch } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route component={Boris} path="/heroes/boris" />
        <Route component={BrowsePage} path="/browse" />
        <Route component={Create} path="/create" />
        <Route component={Home} path="/" />
      </Switch>

    </div>
  );
}

export default App;
