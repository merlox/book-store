import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

export default class Login extends Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div>
                <Header />
                <div className="login-container">
                    <h1>Login or register</h1>
                    <p className="initial-text">Are you an existing or a new user?</p>
                    <button>Login</button>
                    <button>Register</button>
                </div>
                <Footer />
            </div>
        )
    }
}
