import React from 'react';
import clsx from 'clsx';

import "./../../cssFiles/miscComponents/navKorioto.css"
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import { NavLink } from "react-router-dom";


const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
});

function KoriotoNav(props){

    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
        className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
        role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}  >

        <div className="navDrawer"> 

            <br></br>
            <br></br>
            <br></br>
            <div><NavLink to="/" className="drawerLinks" onClick={()=>{window.scrollTo(0,0)}}>
                home
            </NavLink></div>
                <br></br>
                <br></br>
                <br></br>

            <div><NavLink to="/live" className="drawerLinks" onClick={()=>{window.scrollTo(0,0)}}>
                vive.live.kawsay
            </NavLink></div>
                <br></br>
                <br></br>
                <br></br>

            <div><NavLink to="/escucha" className="drawerLinks" onClick={()=>{window.scrollTo(0,0)}}>
                escucha.hear.uyarii
            </NavLink></div>
                <br></br>
                <br></br>
                <br></br>

            <div><NavLink to="/qhaway" className="drawerLinks" onClick={()=>{window.scrollTo(0,0)}}>
                mira.watch.qhaway
            </NavLink></div>
                <br></br>
                <br></br>
                <br></br>
            
            {/* <div><NavLink to="/muestra" className="drawerLinks" onClick={()=>{window.scrollTo(0,0)}}>
                muestra.wear.p'achallina
            </NavLink></div>
                <br></br>
                <br></br>
                <br></br> */}
            
            </div>
        </div>
    );

return(
    <>
    <nav>
    <div className="koriotoNavContainer" >

    {/* on Widescreen operational AF */}
    {/* on Widescreen operational AF */}
    {/* on Widescreen operational AF */}
        <div className="KoriotoNav" >
            <div className="NavLinkCont" > 
                <NavLink className="NaviLink" to="/" onClick={()=> window.scrollTo(0, 0)}>
                    home
                </NavLink>
            </div>

            <div className="NavLinkCont" > 
                <NavLink className="NaviLink" to="/live" onClick={()=> window.scrollTo(0, 0)}>
                    vive.live.kawsay
                </NavLink>
            </div>

            <div className="NavLinkCont" > 
                <NavLink className="NaviLink" to="/escucha" onClick={()=> window.scrollTo(0, 0)} >
                    escucha.hear.uyarii
                </NavLink>
            </div>

            <div className="NavLinkCont" > 
                <NavLink className="NaviLink" to="/qhaway" onClick={()=> window.scrollTo(0, 0)}>
                    mira.watch.qhaway
                </NavLink>
            </div>
            {/* <div className="NavLinkCont" > 
                <NavLink className="NaviLink" to="/muestra" onClick={()=> window.scrollTo(0, 0)}>
                    muestra.wear.p'achallina
                </NavLink>
            </div> */}

            <div className="burger" onClick={toggleDrawer("right", true)} > 
                <div className="burgerLine" ></div>
                <div className="burgerLine" ></div>
                <div className="burgerLine" ></div>
              </div>
        </div>
    <div className="koriotoNaviDeco deco1" ></div>
    <div className="koriotoNaviDeco deco2" ></div>
    <div className="koriotoNaviDeco deco3" ></div>

          <Drawer anchor={"right"} open={state["right"]} onClose={toggleDrawer("right", false)}>
            {list("right")}
          </Drawer>
        
    </div>
    </nav>
    </>
)}

export default KoriotoNav;
