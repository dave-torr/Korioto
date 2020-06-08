import React, { useState, useEffect } from 'react';
import "./../../cssFiles/miscComponents/navKorioto.css"
import { NavLink } from "react-router-dom";


function KoriotoNav(props){

const [NaviTri, SetTrigger] = useState(false)





    {console.log(props)}
return(
    <>
    <div className="koriotoNavContainer" >
        <div className="KoriotoNav" >
            <div className="NavLinkCont" > 
                <NavLink className="NaviLink" to="" >
                    vive.live.kawsay
                </NavLink>
            </div>
            <div className="NavLinkCont" > 
                <NavLink className="NaviLink" to="" >
                    escucha.hear.uyarii
                </NavLink>
            </div>
            <div className="NavLinkCont" > 
                <NavLink className="NaviLink" to="" >
                    mira.watch.qhaway
                </NavLink>
            </div>
            <div className="NavLinkCont" > 
                <NavLink className="NaviLink" to="" >
                    muestra.wear.p'achallina
                </NavLink>
            </div>
        </div>
    <div className="koriotoNaviDeco deco1" ></div>
    <div className="koriotoNaviDeco deco2" ></div>
    <div className="koriotoNaviDeco deco3" ></div>
    </div>
    </>
)}

export default KoriotoNav;
