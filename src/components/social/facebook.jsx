import React from 'react';

export function FacebookFeed(){
    return(
        <>
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fkoriotoec%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=2656912181222013" width="340" height="500" 
        style={{border:"none", overflow:"hidden"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        </>
    )
}
export function FacebookFeedSmall(){
    return(
        <>
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fkoriotoec%2F&width=340&height=150&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=2656912181222013" width="340" height="150" 
        style={{border:"none", overflow:"hidden"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        </>
    )
}