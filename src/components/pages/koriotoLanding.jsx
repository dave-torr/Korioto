import React from 'react';
import {SpotifyFollowButton, SpotifyPlaySec} from "../social/spotify"
import {FacebookFeed, FacebookFeedSmall } from "../social/facebook"
import {YoutubeVideoEmbed  } from "../social/youtube"
import {InstaEmbbed} from "../social/insta"

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


    const landingFiller1=()=>{
        return(
            <>
            <div className="filler1">
                <div className="filler1-Intro" > 
                conecta || connect || tupachiy </div>
                <div className="socialGrid1" > 
                    <div className="spotiDiv" > <SpotifyFollowButton /> </div>
                    <div className="facebookDiv" > <FacebookFeedSmall /> </div>
                    <div className="instaDiv" > <InstaEmbbed /> </div>
                </div>
            </div>
                <img src={fontCopper} className="app-fontface2" alt="korioto-fontface" />
            </>
        )
    }




    return(
        <div>

            {landingFunk()}
    
            <ParallaxGeneral />

            {landingFiller1()}

        </div>
    )
}

export default KoriotoLanding;
