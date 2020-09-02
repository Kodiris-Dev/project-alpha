import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'


import LoginPage from './components/LoginPage'
import FaultFireHome from './components/FaultFireHome'

import './App.css';



function App() {
  return (
    <div className="App">   
      <Switch>
        <Route component={LoginPage} path="/faultfire/login" />
        <Route component={FaultFireHome} path="/faultfire" />
      </Switch>
    </div>
  );
}

export default App;
