import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div className="footer">
                <Link to="/">Home</Link>
                <Link to="/about-us">About us</Link>
                <Link to="/login">Login / Register</Link>
            </div>
        )
    }
}
