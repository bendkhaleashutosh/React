import React, { Component } from 'react'

class MyFavColor extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             color:"Red"
        }
    }
    // static getDerivedStateFromProps(props,state){
    //     return {
    //         color:props.color
    //     }
    // }
    shouldComponentUpdate(){
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById("beforeupdate").innerHTML=`Before Update My Favourite Color was:${prevState.color}`;
    }

    changeColor = ()=>{
        this.setState({color:"Blue"});
    }

    componentDidUpdate(){
        document.getElementById("afterupdate").innerHTML=`After Update My Favourite Color was:${this.state.color}`;
    }

    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.setState({color:"White"})
    //     },2000)
    // }
    render() {
        const {color} = this.state;
        return (
            <div>
                <h2>My Fav Color</h2>
                <p>My Favourite color is: <strong>{color}</strong></p>
                <button type='button' onClick={this.changeColor} >updateColor</button>
                <div id='beforeupdate'></div>
                <div id='afterupdate'></div>
            </div>
        )
    }
}

export default MyFavColor
