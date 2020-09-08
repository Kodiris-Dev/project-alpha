import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          FAULTFIRE V 0.0.1
        </p>
      </header>
    </div>
  );
}

export default App;
