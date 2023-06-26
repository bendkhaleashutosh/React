import React, { Component } from 'react'
const Hoc = (WrapperComp)=> {
    
    class HocComp extends Component {
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
            return <WrapperComp {...this.props} count={this.state.count} counterIncrement={this.counterIncrement}></WrapperComp>
        }
    }
    
    
    return HocComp;
}

export default Hoc
