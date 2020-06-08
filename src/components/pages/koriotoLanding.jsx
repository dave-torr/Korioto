import React from 'react';

// services
// services
import InstagramEmbedding from "./../../services/instagramEmbedding.jsx"

// CSS
// CSS
import "./../../cssFiles/pages/koriotoLanding.css"

// Icons or images
// Icons or images
import iconCopper from "../../assets/Icons/iconCopper.png"
import iconTransparency from "./../../assets/Icons/iconTransparency20pcBlk.png"
import fontWhite from "../../assets/Icons/fontFaceWht.png"

function KoriotoLanding(){

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

const parallaxKorioto=()=>{
    return(
        <div className="parralaxContainer">
            <div className="homeParallax" ></div>

        </div>
    )
}

const intagramEmbedding=()=>{
    return(
        <>
        
        </>
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
