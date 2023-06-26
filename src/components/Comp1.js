import React, { Component } from 'react'
import Comp2 from './Comp2';

class Comp1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            myName:"Ashu" 
        }
    }

    changeData = ()=>{
        this.setState({myName:"Ashu"});
        console.log("Component 1 is called")
    }
    
    render() {
        const{myName} = this.state
        return (
            <div>
                <h2>Comp 1</h2>
                <p>My Name is: <strong>{myName}</strong></p>
                <button type='button' className='btn btn-outline-primary' onClick={this.changeData}>Change Data</button>
                <hr/>
                <Comp2 myName={myName}/>
            </div>
        )
    }
}

export default Comp1
