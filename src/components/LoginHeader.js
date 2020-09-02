import React from 'react'
import { Link } from 'react-router-dom'

function LoginHeader() {
    return (
        <div>
            <div className="login-button">
                <Link to="/faultfire/login">Login/SignUp</Link>
            </div>
        </div>
    )
}

export default LoginHeader