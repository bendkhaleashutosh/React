import React, { Component } from 'react'
import Hoc from './Hoc';

class CounterHover extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //         count:0
    //     }
    // }
    // counterIncrement = ()=>{
    //     this.setState((prevState)=>({count:prevState.count+1}));
    // }
    
    render() {
        // const {count} = this.state;
        const {count,counterIncrement} = this.props;
        return (
            <div>
                <h2>Counter Hover</h2>
                <p>Counter value is <strong>{count}</strong></p>
                {/* <h3 onMouseOver={counterIncrement}>Hover On Me To Increment Counter Value</h3> */}
                <button className='btn btn-outline-secondary' onMouseOver={counterIncrement}>Count++</button>
            </div>
        )
    }
}

export default Hoc(CounterHover) 
