import React, { Component } from 'react'
import './myexternal.css';

class UserForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fname:'',
             pass:''
        }
    }

    inputChangeHandler = (event)=>{
        // console.log(event.target.type);
        // console.log(event.target.name);
        // console.log(event.target.value);
        const {type,name,value} = event.target;
        this.setState({[name]:value})
    }
    checkData = (event)=>{
        event.preventDefault();
        if(this.state.fname===""){
            window.alert("fname is required.");
            return false;
        }
        if(!this.state.fname.match("^[a-zA-Z ]{3,20}$")){
            window.alert("fname must contain only character min-3 and max-20.");
            return false;
        }
        if(this.state.pass===""){
            window.alert("Password is required.");
            return false;
        }
        if(!this.state.pass.match("^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")){
            window.alert("password must be eight characters including one uppercase letter, one special character and alphanumeric characters.");
            return false;
        }
        window.alert(JSON.stringify(this.state));
    }
    
    render() {
        const {fname,pass} = this.state;
        return (
            <div className='container text-center pb-2 myForm' >
                <h2>User Form Component</h2>
                <form onSubmit={this.checkData}>
                    <label className='form-label'>Enter Your Full Name: </label>
                    <input type='text' name='fname' className='form-control' onChange={this.inputChangeHandler} value={fname} /><br/>
                    <label className='form-label'>Enter Your Password: </label>
                    <input type='text' name='pass' className='form-control' onChange={this.inputChangeHandler} value={pass} /><br/>
                    <button type='submit' className='btn btn-primary mt-2'>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserForm
