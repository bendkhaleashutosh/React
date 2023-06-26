import React, { Component } from 'react'

class RefComp extends Component {
    constructor(props) {
        super(props)
        // we created ref
        this.inputRef = React.createRef();
        this.state = {
             
        }
    }

    accessInput = ()=>{
        //we access ref here
        this.inputRef.current.focus();
        console.log(this.inputRef.current.value);
    }
    
    render() {
        return (
            <div className='container bg-secondary text-center'>
                <h2>Ref Component</h2>
                {/* we assign ref to input controller */}
                <input type='text' name='mytxt' ref={this.inputRef} /><br/>
                <button type='button' className='btn btn-warning mt-3 mb-2' onClick={this.accessInput}>Check it</button>
            </div>
        )
    }
}

export default RefComp
