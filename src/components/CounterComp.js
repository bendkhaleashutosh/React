import React, { Component } from 'react'
import CountComp from './CountComp';

class CounterComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    greeting = ()=>{
        window.alert("Good Morning MF's");
    }

    greeting1 = (stdName)=>{
        window.alert(`Welcome to Dubai ${stdName}`)
    }

    counterIncrement = ()=>{
        this.setState((prevState)=>({count:prevState.count+1}));
    }

    counterDecrement = ()=>{
        this.setState((prevState)=>({count:prevState.count-1}));
    }
    
    render() {
        const {count} = this.state;
        return (
            <div>
                <h2>This is my Conter Component</h2>
                <p>Counter value is <strong>{count}</strong></p>
                <button type='button' onClick={this.greeting}>Greeting</button> &nbsp;
                <button type='button' onClick={()=>this.greeting1("MF's")}>Greeting 1</button><br/>
                <button type='button' onClick={this.counterIncrement}>Count++</button> &nbsp;
                <button type='button' onClick={this.counterDecrement}>Count--</button>
                <h2 onMouseOver={this.counterIncrement}>Hover On Me To Increment Counter Value</h2>
                <h2 onMouseOver={this.counterDecrement}>Hover On Me To Decrement Counter Value</h2>
            </div>
        )
    }
}

export default CounterComp
