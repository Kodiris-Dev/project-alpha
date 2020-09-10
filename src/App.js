import React from 'react';
import './App.css';
import Home from './components/Home'
import Heroes from './components/HeroPage/Heroes'
import Boris from './components/HeroPage/Boris'

import Navigation from './components/Navbar'
import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={Boris} path="/faultfire/heroes/boris" />
        <Route component={Heroes} path="/faultfire/heroes" />
        <Route component={Home} path="/faultfire" />
      </Switch>
      <Navigation />
    </div>
  );
}

export default App;
