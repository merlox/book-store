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
                This is the login page
                <Footer />
            </div>
        )
    }
}
