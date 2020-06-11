import React from 'react';
import {SpotifyFollowButton, SpotifyPlaySec} from "./spotify"
import {FacebookFeed, FacebookFeedSmall } from "./facebook"
import {InstaEmbbed} from "./insta"

import fontCopper from "../../assets/Icons/fontFaceCppr.png"


export function SocialComponent1(){

    return(
        <>
        <div className="filler1">
        <div className="fillerDeco1"> </div>
        <div className="fillerDeco2"> </div>
        <div className="fillerDeco3"> </div>
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
