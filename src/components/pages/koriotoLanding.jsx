import React from 'react';

import {LivePageLanding } from "./live"
// import ReactTransitionGroup from 'react-addons-transition-group' // ES6


// CSS
// CSS
import "./../../cssFiles/pages/koriotoLanding.css"

// Icons or images
// Icons or images
import iconCopper from "../../assets/Icons/iconCopper.png"
import iconTransparency from "./../../assets/Icons/iconTransparency20pcBlk.png"
import fontWhite from "../../assets/Icons/fontFaceWht.png"
import fontCopper from "../../assets/Icons/fontFaceCppr.png"

import ParallaxGeneral from "./../miscComp/parallax"

function KoriotoLanding(props){

    const landingFunk=()=>{
        return(
            <>
                <header className="App-header">
                <img src={iconCopper} className="App-icon" alt="korioto-logo" />
                <img src={iconTransparency} className="App-icon2" alt="korioto-logo2" />
                <img src={fontWhite} className="app-fontface" alt="korioto-fontface" />
                </header>
            </>
        )
    }


    
    return(
        <div>

            {landingFunk()}
    
            <ParallaxGeneral />

            <LivePageLanding   tourDates= {props.tourDates} />
        </div>
    )
}

export default KoriotoLanding;
