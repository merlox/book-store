import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'

export default class AboutUs extends Component {
    constructor () {
        super()
    }
    render () {
        return (
            <div>
                <Header />

                <div className="about-us">
                    <h1>Book Store About Us</h1>
                    <p>Our book store is one of those precious places where you can let your imagination go wild by exploring all kinds of interesting books that will make you feel like you're in another universe, in another better planet made for yourself.</p>
                </div>

                <Footer />
            </div>
        )
    }
}
