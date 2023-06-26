import React, { Component } from 'react'
import ChildComp from './ChildComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    counterIncrement = ()=>{
        this.setState((prevState)=>({count:prevState.count+1}));
    }
    
    render() {
        const {count} = this.state;
        return (
            <div>
                <h1>Parent Component</h1>
                <p>My Counter value is : <strong>{count}</strong></p>
                <button type='button' onClick={this.counterIncrement}>Count++</button>
                <hr/>
                <ChildComp count={count} counterIncrement={this.counterIncrement} myName="Ashutosh"/>
            </div>
        )
    }
}

export default ParentComp
