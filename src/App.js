import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import ProductPage from './components/ProductPage'
import './index.styl'

class App extends Component {
    constructor () {
        super()
        this.state = {
            productTitle: '',
            productPrice: 0,
        }
    }

    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={() => (
                        <Home
                            buyProduct={(title, price) => {
                                this.setState({
                                    productTitle: title,
                                    productPrice: price,
                                })
                            }}
                        />
                    )} />
                    <Route path="/about-us" render={() => (
                        <AboutUs />
                    )} />
                    <Route path="/product-page" render={() => (
                        <ProductPage
                            productTitle={this.state.productTitle}
                            productPrice={this.state.productPrice}
                        />
                    )} />
                </Switch>
            </BrowserRouter>
        )
    }
}

render(<App/>, document.querySelector('#root'))
