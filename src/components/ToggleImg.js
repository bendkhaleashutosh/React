import React, { Component } from 'react';
import Data from '../shared/constant/constantData';
import './myexternal.css';
import {Outlet} from 'react-router-dom';

class ToggleImg extends Component {

constructor(props) {
    super(props)
    this.isCondition=false;
    this.state = {
         imgPath:Data.car,
        imgName:"Car"
    }
}

changeImg = ()=>{
    this.isCondition = !this.isCondition;
    if(this.isCondition){
        this.setState({imgPath:Data.bike,imgName:"Bike"})
    }else{
        this.setState({imgPath:Data.car,imgName:"Car"})
    }
   
}
    render() {
        const {imgPath,imgName} = this.state
        return (
            <div className='myBox'>
                <h2>This is My Toggle Image component</h2>
                <img src={imgPath} alt="Car" width={300} height={200}/><br/>
                <h3>{imgName}</h3>
                <button type="button" onClick={this.changeImg}>Toggle Img</button>
                <hr/>
                <Outlet />
            </div>
        )
    }
}

export default ToggleImg
