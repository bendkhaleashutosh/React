import React, { Component } from 'react'

class UserComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const {name} = this.props;
        if(name==="Rupesh"){
            throw new Error("Not a user");
            // return <h2>Not a User</h2>
        }
        return <p>This is <strong>{name}</strong></p>
    }
}

export default UserComp
