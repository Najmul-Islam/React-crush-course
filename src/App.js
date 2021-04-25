import React, { Component } from 'react'

class App extends Component {
    constructor (){
        super()
        this.state = {}
    }

    componentDidMount() {
        // GET the dat I need to correctly display
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.whatever !== this.props.whatever) {
            // do something important here
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        // return true if want it to update
        // return false if not
    }

    componentWillUnmount(){
        // teardown or cleanup your code before your conmponent disappears
        // (E.g. remove event listeners)
    }
    
    render(){
        return(
            <div>

            </div>
        )
    }
}

export default App