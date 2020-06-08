import React from 'react';
import "./../../cssFiles/pages/koriotoLanding.css"
import iconCopper from "../../assets/Icons/iconCopper.png"
import fontWhite from "../../assets/Icons/fontFaceWht.png"

function KoriotoLanding(){

const landingFunk=()=>{
    return(
        <>
            <header className="App-header">
            <img src={iconCopper} className="App-icon" alt="korioto-logo" />
            <img src={fontWhite} className="app-fontface" alt="korioto-fontface" />
            </header>
        </>
    )
}

const parallaxKorioto=()=>{
    return(
        <div className="parralaxContainer">
            <div className="homeParallax" ></div>

        </div>
    )
}

    return(
        <div>

      {landingFunk()}
      {parallaxKorioto()}
        </div>
    )
}

export default KoriotoLanding;
