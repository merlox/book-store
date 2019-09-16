import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div>
                <div className="header">Book Store</div>
                <div className="products-container">
                    <Product
                        title="Hunger makes me a modern girl"
                        image="imgs/book-one.jpg"
                        price="19.95"
                        buyProduct={(title, price) => this.props.buyProduct(title, price)}
                    />
                    <Product
                        title="John welsh modern house"
                        image="imgs/book-two.jpg"
                        price="29.95"
                        buyProduct={(title, price) => this.props.buyProduct(title, price)}
                    />
                    <Product
                        title="Mid-century modern architecture travel guide"
                        image="imgs/book-three.jpg"
                        price="14.95"
                        buyProduct={(title, price) => this.props.buyProduct(title, price)}
                    />
                    <Product
                        title="Hunger makes me a modern girl"
                        image="imgs/book-one.jpg"
                        price="19.95"
                        buyProduct={(title, price) => this.props.buyProduct(title, price)}
                    />
                    <Product
                        title="John welsh modern house"
                        image="imgs/book-two.jpg"
                        price="29.95"
                        buyProduct={(title, price) => this.props.buyProduct(title, price)}
                    />
                    <Product
                        title="Mid-century modern architecture travel guide"
                        image="imgs/book-three.jpg"
                        price="14.95"
                        buyProduct={(title, price) => this.props.buyProduct(title, price)}
                    />
                </div>
                <div className="footer">
                    <Link to="/">Home</Link>
                    <Link to="/about-us">About us</Link>
                </div>
            </div>
        )
    }
}

class Product extends Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div className="product">
                <h3 className="title">{this.props.title}</h3>
                <img src={this.props.image} alt={this.props.image}/>
                <div className="price">$ {this.props.price}</div>
                <Link to="/product-page" className="button-link" onClick={() => {
                    this.props.buyProduct(this.props.title, this.props.price)
                }}>Buy</Link>
            </div>
        )
    }
}
