import React from 'react'
import logo from '../logo.svg';

function Home() {
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <a href="/faultfire/heroes">
                Heroes Page
                </a>
            </header>
        </div>
    )
}

export default Home