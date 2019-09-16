import React, { Component } from 'react'

export default class Home extends Component {
    constructor () {
        super()
    }
    render () {
        return (
            <div>
                <div className="header">Book Store</div>
                <div className="products">
                    <Product
                        title="Huger makes me a modern girl"
                        image="imgs/book-one.jpg"
                        price="19.95"
                    />
                </div>
                <div className="footer"></div>
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
                <button className="buy-button">Buy</button>
            </div>
        )
    }
}
