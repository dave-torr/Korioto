import React from 'react';
import "./../../cssFiles/miscComponents/footer.css";
import {SpotifyFollowButton, SpotifyPlaySec} from "../social/spotify"
import {FacebookFeed, FacebookFeedSmall } from "../social/facebook"
import {YoutubeVideoEmbed  } from "../social/youtube"

export default function Footer(props){


    return(
        <>
        <div className="generalFooterCont" >
        <SpotifyFollowButton /> 
        <br></br>
        <FacebookFeedSmall />
        <YoutubeVideoEmbed />
        <br></br>
        <br></br>
        <br></br>
        </div>
        </>
    )
}