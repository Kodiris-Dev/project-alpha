import React from 'react'
import logo from './../assets/logo.svg';
import LoginHeader from './LoginHeader';

function FaultFireHome() {
    return (
        <div>
            <LoginHeader />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    FAULTFIRE HOME PAGE
                </p>
                <a
                    className="App-link"
                    href="https://faulthub.net"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Fault Hub Network
                </a>
            </header>
        </div>
        
    )
}

export default FaultFireHome