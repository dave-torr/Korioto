import React, { useState, useEffect } from 'react';
import "./../../cssFiles/miscComponents/navKorioto.css"
import { NavLink } from "react-router-dom";


function KoriotoNav(props){

const [NaviTri, SetTrigger] = useState(false)





    {console.log(props)}
return(
    <>
    <div className="KoriotoNav" >
        <div className="NavLinkCont" > 
            <NavLink className="NaviLink" to="" >
                vive
            </NavLink>
        </div>
        <div className="NavLinkCont" > 
            <NavLink className="NaviLink" to="" >
                escucha
            </NavLink>
        </div>
        <div className="NavLinkCont" > 
            <NavLink className="NaviLink" to="" >
                mira
            </NavLink>
        </div>
        <div className="NavLinkCont" > 
            <NavLink className="NaviLink" to="" >
                muestra
            </NavLink>
        </div>
    </div>
    </>
)}

export default KoriotoNav;
