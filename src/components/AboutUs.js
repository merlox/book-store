import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AboutUs extends Component {
    constructor () {
        super()
    }
    render () {
        return (
            <div>
                <div className="header">Book Store</div>

                <div className="about-us">
                    <h1>Book Store About Us</h1>
                    <p>Our book store is one of those precious places where you can let your imagination go wild by exploring all kinds of interesting books that will make you feel like you're in another universe, in another better planet made for yourself.</p>
                </div>

                <div className="footer">
                    <Link to="/">Home</Link>
                    <Link to="/about-us">About us</Link>
                </div>
            </div>
        )
    }
}
