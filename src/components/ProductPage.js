import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default class ProductPage extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div>
                <Header />

                <div className="product-details">
                    <h1>{this.props.productTitle}</h1>
                    <p>
                        Ethereum is one of the commonly used platforms for building blockchain applications. It's a decentralized platform for applications that can run exactly as programmed without being affected by fraud, censorship, or third-party interference.
                    </p>

                    <p>
                        This book will give you a deep understanding of how blockchain works so that you can discover the entire ecosystem, core components, and its implementations. You will get started by understanding how to configure and work with various Ethereum protocols for developing dApps. Next, you will learn to code and create powerful smart contracts that scale with Solidity and Vyper. You will then explore the building blocks of the dApps architecture, and gain insights on how to create your own dApp through a variety of real-world examples. The book will even guide you on how to deploy your dApps on multiple Ethereum instances with the required best practices and techniques. The next few chapters will delve into advanced topics such as, building advanced smart contracts and multi-page frontends using Ethereum blockchain. You will also focus on implementing machine learning techniques to build decentralized autonomous applications, in addition to covering several use cases across a variety of domains such as, social media and e-commerce.
                    </p>
                    <p style={{marginBottom: 50}}><b>$ {this.props.productPrice}</b></p>
                    <Link className="button-link" to="/">Go Back</Link>
                </div>

                <Footer />
            </div>
        )
    }
}
