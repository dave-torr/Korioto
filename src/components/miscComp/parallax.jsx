import React, { useState, useEffect } from 'react';

import CameraIcon from '@material-ui/icons/Camera';

import parallawWide1 from "./../../assets/Images/parallax/wide1.png"
import parallawWide2 from "./../../assets/Images/parallax/wide2.png"
import parallawWide3 from "./../../assets/Images/parallax/wide3.png"
import parallawWide4 from "./../../assets/Images/parallax/wide4.png"
import parallawWide5 from "./../../assets/Images/parallax/wide5.png"
import parallawTall1 from "./../../assets/Images/parallax/tall1.png"
import parallawTall2 from "./../../assets/Images/parallax/tall2.png"
import parallawTall3 from "./../../assets/Images/parallax/tall3.png"
import parallawTall4 from "./../../assets/Images/parallax/tall4.png"
import parallawTall5 from "./../../assets/Images/parallax/tall5.png"

import "./../../cssFiles/miscComponents/parallax.css"

const wideScreenImgArr=[parallawWide1, parallawWide2, parallawWide3, parallawWide4, parallawWide5];
const tallScreenImgArr=[parallawTall1, parallawTall2, parallawTall3, parallawTall4, parallawTall5];

let randomPic;

function ParallaxGeneral(){

    useEffect(()=>{

    });
    const randomImage=()=>{
        if(window.innerWidth>1100){
            return(
                randomPic = wideScreenImgArr[Math.floor(Math.random() * wideScreenImgArr.length)]
            )
        } else if (window.innerWidth<1100){ }
            return(
                randomPic = tallScreenImgArr[Math.floor(Math.random() * tallScreenImgArr.length)]
            )
    }




return (
        <>
            <div className="parallax-container" > 
                <div className="parallaxBackground" 
                width="100%" 
                    style={{
                        backgroundImage: `url(${randomImage()})`, 
                        transform: `translate(0px, 0px)`
                        }}>
                </div>
                <br></br>
                <a href="https://www.instagram.com/hakanstagram_/" >
                <div className="creditDiv">
                    <CameraIcon /> hakanstagram
                </div> 
                </a>
            </div>
        </>
    )
};

export default ParallaxGeneral;