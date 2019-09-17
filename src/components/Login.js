import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

export default class Login extends Component {
    constructor () {
        super()
        this.state = {
            isLoginFormHidden: true,
            isRegisterFormHidden: true,
        }
    }

    render () {
        return (
            <div>
                <Header />
                <div className="login-container">
                    <h1>Login or register</h1>
                    <p className="initial-text">Are you an existing or a new user?</p>
                    <button onClick={() => {
                        this.setState({
                            isLoginFormHidden: !this.state.isLoginFormHidden,
                        })
                    }}>Login</button>
                    <button onClick={() => {
                        this.setState({
                            isRegisterFormHidden: !this.state.isRegisterFormHidden,
                        })
                    }}>Register</button>

                    <LoginForm isHidden={this.state.isLoginFormHidden} />
                    <RegisterForm isHidden={this.state.isRegisterFormHidden} />
                </div>
                <Footer />
            </div>
        )
    }
}

class LoginForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }

    async submitForm () {
        let response = await fetch('/user/login', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.state),
        })
        response = await response.json()
        if (response.ok) {
            alert('Success! ' + response.msg + ' ' + response.name)
        } else {
            alert('Error! ' + response.msg)
        }
    }

    render () {
        return (
            <form onSubmit={e => {
                e.preventDefault()
                this.submitForm()
            }} className="login-form" style={{visibility: this.props.isHidden ? 'hidden' : 'visible'}}>
                <input onChange={e => {
                    this.setState({email: e.target.value})
                }} placeholder="Your email..." type="text"/>
                <input onChange={e => {
                    this.setState({password: e.target.value})
                }} placeholder="Your password..." type="password"/>
                <button>Submit form</button>
            </form>
        )
    }
}

class RegisterForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            repeatPassword: '',
        }
    }

    async submitForm () {
        let response = await fetch('/user', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.state),
        })
        response = await response.json()
        if (response.ok) {
            alert('Success! ' + response.msg)
        } else {
            alert('Error! ' + response.msg)
        }
    }

    render () {
        return (
            <form onSubmit={e => {
                e.preventDefault()
                this.submitForm()
            }} className="register-form" style={{visibility: this.props.isHidden ? 'hidden' : 'visible'}}>
                <input onChange={e => {
                    this.setState({name: e.target.value})
                }} placeholder="Your name..." type="text"/>
                <input onChange={e => {
                    this.setState({email: e.target.value})
                }} placeholder="Your email..." type="text"/>
                <input onChange={e => {
                    this.setState({password: e.target.value})
                }} placeholder="Your password..." type="password"/>
                <input onChange={e => {
                    this.setState({repeatPassword: e.target.value})
                }} placeholder="Repeat password..." type="password"/>
                <button>Submit form</button>
            </form>
        )
    }
}
