import React, {Component} from 'react'

class App extends Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <form action="">
                <input
                    name="firstName"
                    type="text"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    placeholder="First Name"
                />
                    <br/>
                <input 
                    name="lastName"
                    type="text"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    placeholder="Last Name"
                />
                <br/>
                <input 
                    type="email" 
                    name="email"
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder="Email"
                />

                <h1>{this.state.firstName}</h1>
                <h1>{this.state.lastName}</h1>
                <h1>{this.state.email}</h1>
            </form>
        )
    }
}

export default App