import React from 'react';
import InstagramEmbed from 'react-instagram-embed';


export function InstaEmbbed(){
    return(
        <>
            <InstagramEmbed
            url='https://www.instagram.com/p/CA3yH1ZA0dO/'
            maxWidth={320}
            hideCaption={true}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
            />
        </>
    )
}