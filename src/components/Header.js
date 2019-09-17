import React, { Component } from 'react'

export default class Header extends Component {
    constructor () {
        super()
        this.state = {
            name: '',
        }
    }

    componentDidMount () {
        this.getLoggedUser()
    }

    async getLoggedUser () {
        let response = await fetch('/user')
        response = await response.json()
        if (Object.keys(response).length > 0) {
            this.setState({name: response.name})
        }
    }

    render () {
        return (
            <div className="header">
                <div>Book Store</div>
                <div style={{display: this.state.name.length == 0 ? 'none' : 'inline-block'}}>User logged as {this.state.name}</div>
            </div>
        )
    }
}
