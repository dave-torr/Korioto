import React from 'react';
import copperFont from "./../../assets/Icons/fontFaceCppr.png"
// CSS
// CSS
import "./../../cssFiles/pages/live.css"

export function LivePage(props){

    const liveDates=()=>{
        let eachConcert = props.tourDates.map((eachItem, i) =>
        <>
            <div className="eachConcert" >
                <div className="aConcertDate" >
                {eachItem.eventDate}
                </div>
                <div className="aConcertLocation" >
                {eachItem.location}
                </div>
                <div className="aConcertCapacity" >
                capacity: {eachItem.maxCapacity}
                </div>
                <div className="aConcertCity" >
                {eachItem.city}
                </div>
                <div className="aEventPrice" >
                USD ${eachItem.entranceFees.standardFee}.-
                </div>
                <div className="aEventName" >
                {eachItem.eventName}
                </div>
            </div>    
        </>
        )
        return(
            <>
            <div className="liveDeco3"> </div>
            {eachConcert}
            </>
        )
    }
    
    return(
        <>
            <div id="livePageGeneral">
                <div className="liveLogo" > 
                <img className="liveLogoImg" src={copperFont} />
                    <div className="liveDeco1"> </div>
                    <div className="liveDeco2"> </div>
                    <div className="liveDeco3"> </div>
                    <div className="LiveIntro" > 
                    vive || live || kawsay </div>
                </div>

                {liveDates()}

            </div>
        </>
    )
}




export function LivePageLanding(props){
    // console.log(props)
    return(
        <>
            <div id="livePageGeneral">
                <div className="liveLogo2" > 
                    <div className="liveDeco4"> </div>
                    <div className="liveDeco5"> </div>
                    <div className="liveDeco6"> </div>
                    <div className="LiveIntro2" > 
                    pronto || soon || kawsay </div>
                </div>




            <div className="eachConcert" >
                <div className="aConcertDate" >
                {props.tourDates[0].eventDate}
                </div>
                <div className="aConcertLocation" >
                {props.tourDates[0].location}
                </div>
                <div className="aConcertCapacity" >
                capacity: {props.tourDates[0].maxCapacity}
                </div>
                <div className="aConcertCity" >
                {props.tourDates[0].city}
                </div>
                <div className="aEventPrice2" >
                USD ${props.tourDates[0].entranceFees.standardFee}.-
                </div>
                <div className="aEventName" >
                {props.tourDates[0].eventName}
                </div>
            </div> 

            <div className="landingTicketsBtn" > TICKETS </div>
            </div>
        </>
    )
}