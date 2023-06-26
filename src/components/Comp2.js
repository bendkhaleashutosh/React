import React, { Component, PureComponent } from 'react'

class Comp2 extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        console.log("Component 2 is called")
        return (
            <div>
                <h2>Comp 2</h2>
                <p>My Name is: <strong>{this.props.myName}</strong></p>
            </div>
        )
    }
}

export default Comp2
