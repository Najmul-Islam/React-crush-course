import React, {Component} from 'react'

// #1
class App extends React.Component{

    render(){
        return(
            <div>
                <Header username="Najmul" />
                <Greeting />
            </div>
        )
    }
}

// #2
class Header extends React.Component{
    render(){
        return(
            <header>
                <p>Welcome, {this.props.username}</p>
            </header>
        )
    }
}

// #3
class Greeting extends Component {

   render(){
        const date = new Date()
        const hours = date.getHours()
        let tiemOfDay

        if (tiemOfDay < 12) {
            tiemOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            tiemOfDay = "afternoon"
        } else {
            tiemOfDay = "night"
        }

        return (
            <h1>Good {tiemOfDay} to you, sir or madam! </h1>
        )
   }
}
export default App