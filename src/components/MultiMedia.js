import React, { Component } from 'react'
import car from '../assets/car.jpg'
import sampleVideo from '../assets/samplevideo.mp4';
import './myexternal.css';
import mystyle from './external.module.css'

class MultiMedia extends Component {

    constructor(props) {
        super(props)
        this.myStyle = {
            color:"red",
            textTransform:"Uppercase",
            fontSize:"30px"
        }
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                {/* use of internal css */}
                <h2 style={{color:"red", textAlign:"center"}}>This is My Multi-Media Component</h2>
                <p style={this.myStyle}>i like cars</p>
                {/* use of external css */}
                <h3 className=".special">YCP Mumbai</h3>
                <h3 className="textSuccess">Infoway Pune</h3>
                {/* use of external.module.css */}


                <img src={car} alt="Car"/><br/>
                <br/>
                {/* <video scr={sampleVideo} controls height="300px"></video> */}
                <video src={sampleVideo} controls width={400}></video>
            </div>
        )
    }
}

export default MultiMedia
