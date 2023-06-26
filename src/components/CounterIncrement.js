import React, { Component } from 'react'
import Hoc from './Hoc';


class CounterIncrement extends Component {
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
                <h2>Conter Increment</h2>
                <p>Counter value is <strong>{count}</strong></p>
                 <button type='button' className='btn btn-outline-secondary' onClick={counterIncrement}>Count++</button> &nbsp;
            </div>
        )
    }
}

export default Hoc(CounterIncrement)
