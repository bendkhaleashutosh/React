import React, { Component } from 'react'
import Data from '../shared/constant/constantData';
import './myexternal.css';


class SmileToggComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgPath:Data.smile,
            imgName:"Smile"
        }
    }

    changeImgSad = ()=>{
            this.setState({imgPath:Data.sad,imgName:"Sad"})
    }

    changeImgSmile = ()=>{
        this.setState({imgPath:Data.smile,imgName:"Smile"})
    }
    

    render() {
        const {imgPath,imgName} = this.state
        return (
            <div className='myBox'>
                <h2>This is My Toggle Image component</h2>
                <img src={imgPath} alt="Smile" width={300} height={200}/><br/>
                <h3>{imgName}</h3>
                <button type="button" onClick={this.changeImgSmile}>Smile</button>
                <button type="button" onClick={this.changeImgSad}>Sad</button>
            </div>
        )
    }
}

export default SmileToggComp
