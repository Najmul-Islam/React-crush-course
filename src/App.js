import React, {Component} from 'react'

class App extends Component{
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            destination: '',
            dieraryRestrictions: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        const {name, value} = e.target

        this.setState({
            [name] : value
        })
    }

    render(){
        return(
            <div>
                <form>
                    <label>
                        First Name:
                        <input 
                            type="text"
                            name="firstName"
                            value={this.state.firstName}
                            placeholder="First Name"
                            onChange={this.handleChange}
                        />
                    </label>
                    <br/>
                    <label>
                        Last Name:
                        <input
                            type="text"
                            name="lastName"
                            value={this.state.lastName}
                            placeholder="Last Name"
                            onChange={this.handleChange}
                        />
                    </label>
                    <br/>
                    <label>
                        Age:
                        <input
                            type="number"
                            name="age"
                            value={this.state.age}
                            placeholder="Your Age"
                            onChange={this.handleChange}
                        />
                    </label>
                    <br/>
                    <label>
                       <input 
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        /> Male
                    </label>
                    <br/>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        /> Female
                    </label>
                    <br/>

                    <select 
                        value={this.state.destination} name="destination"
                        onChange={this.handleChange}
                    >
                        <option value="">-- Please Choose a destinaiton --</option>
                        <option value="germany">Germany</option>
                        <option value="norway">Norway</option>
                        <option value="north pole">North pole</option>
                        <option value="south pole">South pole</option>
                    </select>

                    <button>Submit</button>
                </form>
                <hr/>
                <h2>Entered information:</h2>
                <p>Your Name: {this.state.firstName} {this.state.lastName} </p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your Destination: {this.state.destination}</p>
            </div>
        )
    }
}

export default App