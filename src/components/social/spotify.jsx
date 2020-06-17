import React from 'react';

export function SpotifyFollowButton(){


    return(
        <>
        <div className="SpotyFollowBtn" >
            <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:3Max9gByRcD6vZe72n1DNS&size=detail&theme=light" width="300" height="56" scrolling="no" frameborder="0" style={{border:"none", overflow:"hidden"}} allowtransparency="true"></iframe>
        </div>
        </>
    )
}

export function SpotifyPlayComp(){
    return (
        <>
        <div className="SpotyPlaySec"> 
            <iframe src="https://open.spotify.com/embed/artist/3Max9gByRcD6vZe72n1DNS" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        </>
    )
}