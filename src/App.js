import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import './index.styl'

class App extends Component {
    constructor () {
        super()
    }

    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={() => (
                        <Home />
                    )} />
                    <Route path="/about-us" render={() => (
                        <AboutUs />
                    )} />
                </Switch>
            </BrowserRouter>
        )
    }
}

render(<App/>, document.querySelector('#root'))
