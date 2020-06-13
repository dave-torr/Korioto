import React from 'react';
import "./../../cssFiles/miscComponents/footer.css";
import astronautIcon from "./../../assets/Icons/astronaut.svg"

export function Footer(props){


    return(
        <>
            <div className="generalFooterCont" >
                <div className="credits">
                Copyright © 2020
                </div>
                <br></br>

                <br></br>
                <div className="credits">
                {`made with <3 by:`} 
                </div>
                

                <div className="wairaNuna">
                {`{ waira.nuna }`}
                </div> 

                <img src={astronautIcon} className="astronautIcon"
                />

            </div>
        </>
    )
}