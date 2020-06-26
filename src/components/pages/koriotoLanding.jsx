import React, { useState } from 'react';
import {LivePageLanding } from "./live";

// TRANSITION GROUP
// TRANSITION GROUP


// CSS
// CSS
import "./../../cssFiles/pages/koriotoLanding.css";



// Icons or images
// Icons or images
import iconCopper from "../../assets/Icons/iconCopper.png"
import iconTransparency from "./../../assets/Icons/iconTransparency20pcBlk.png"
import fontWhite from "../../assets/Icons/fontFaceWht.png"

import ParallaxGeneral from "./../miscComp/parallax"

function KoriotoLanding(props){

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

  const [pickedLangage, setLang] = useState("SPA-active");

  const [showSpanish, setShowspanish] = useState(true);
  const [showEnglish, setShowEnglish] = useState(false);
    
    const explainerFunk=(props)=>{

        return(
            <div className="LandingxplainerContainer">
                <div className="landingExplainerTitleSPA landingLanguageBTN" 
                onClick={() =>{
                    setShowEnglish(false)
                    setShowspanish(true)
                    } }>
                    que es korioto?
                    </div>
                    <div className="fillerDeco7"></div>
                    <div className="fillerDeco8"></div>
                    <div className="fillerDeco9"></div>

                <div className="landingExplainerTitleENG landingLanguageBTN" 
                onClick={() =>{
                    setShowEnglish(true)
                    setShowspanish(false)
                    } }>
                        what is korioto?
                        </div>

                    <div className="fillerDeco4"></div>
                    <div className="fillerDeco5"></div>
                    <div className="fillerDeco6"></div>



                {showSpanish &&
                    <div className="explanierSPA"> 
                        <div className="landingExplainer langContent" >
                            Korioto es una banda de música Fusión que utiliza la música tradicional Ecuatoriana como recurso inspiracional para sus composiciones.
                            </div>
                        <div className="landingExplainer langContent2" >
                            Korioto quiere mostrar cualidades sonoras y rítmicas tradicionales del Ecuador, enriqueciendo las nuevas corrientes urbanas.
                            </div>
                        <div className="landingExplainer langContent3" >
                            Los temas de sus letras embarcan distintos temas, desde vivencias personales hasta el llamado a hacer una sociedad mas justa, empezando por nosotros.
                            </div>
                            </div> 
                            }    

                {showEnglish &&
                <div className="explanierENG"> 
                        <div className="landingExplainer langContent" >
                        Korioto is a music band that blends traditional Ecuadorian music as a source of inspiration for compositions.
                        </div>
                    <div className="landingExplainer langContent2" >
                        The aim of Korioto is to show the qualities of sounds and rhythms that arise from Ecuador, enriching new urban currents.
                        </div>
                    <div className="landingExplainer langContent3" >
                        The themes invoked in their music, cover a vast expanse of themes, from personal anecdotes and experiences, to the call of creating a society that is fair to all it's members, starting with personal action.
                        </div>
                    </div>
                    }
            </div>
        )
    }
    
    // console.log()
    return(
        <div>

            {landingFunk()}
    
            <ParallaxGeneral />

            {explainerFunk(pickedLangage) }
            <LivePageLanding   tourDates= {props.tourDates} />
        </div>
    )
}

export default KoriotoLanding;
