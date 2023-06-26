import React, { Component } from 'react'

class CondRendComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogin:true
        }
    }
    
    render() {
        const {isLogin} = this.state;
        let msg='';
    //    if(!isLogin){
    //        //return <h2>Admin Login Successfully</h2>
    //        msg="Admin Login Successfully"
    //    }else{
    //        //return <h2>User Login Successfully</h2>
    //        msg="User Login Successfully"
    //    }
    //    return <h2>{msg}</h2>

    // use of ternary operator
    // return (isLogin)?<h2>Admin Login</h2>:<h2>User Login</h2>

    // use of short circuits
    return (isLogin) && <h1>Admin Login</h1>
    }
}

export default CondRendComp
