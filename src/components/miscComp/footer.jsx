import React from 'react';
import "./../../cssFiles/miscComponents/footer.css";
import {SpotifyFollowButton, SpotifyPlaySec} from "./../miscComp/spotify"

export default function Footer(props){


    return(
        <>
        <div className="generalFooterCont" >
        <SpotifyFollowButton /> 
        <SpotifyPlaySec />
        </div>
        </>
    )
}