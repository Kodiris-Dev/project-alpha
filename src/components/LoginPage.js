import React from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {
    return (
        <div>
            <h1>This is the login view</h1>
            <Link to="/faultfire">Back Home</Link>
        </div>
    )
}

export default LoginPage