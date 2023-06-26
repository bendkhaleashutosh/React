import React, { Component } from "react";

class MyClassComp extends Component{
    render(){
        return <>
            <h1>This is My Class Copmonent</h1>
            <p>My Name is <strong>{this.props.name}</strong>, I am <strong>{this.props.post}</strong></p>
        </>
    }
}

export default MyClassComp;