import React, { Component } from 'react'
import car from '../assets/car.jpg'
import bike from '../assets/bike.jpg'

class ImgToggComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isStatus:true
        }
    }

    changeImageToBike = ()=>{
        this.setState((prevState)=>({isStatus:false}))
    }

    changeImageToCar = ()=>{
        this.setState((prevState)=>({isStatus:true}))
    }
    

    render() {
        const{isStatus}=this.state;
        if(isStatus){
            return<div>
            <img src={car} alt="car"/><br/>
            <h3>Car</h3><br/>
            <button type="button" onClick={this.changeImageToBike}>Change Image</button>
            </div>
        }else{
                return<div>
                <img src={bike} alt="bike"/><br/>
                <h3>Bike</h3><br/>
                <button type="button" onClick={this.changeImageToCar}>Change Image</button>
                </div>
        }
    }
}

export default ImgToggComp
