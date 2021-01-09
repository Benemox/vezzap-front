import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"
import home from "../../img/dashboard.png"
import search from "../../img/buscar.png"
import Scan from "../../img/escaner.png"
import Per from "../../img/mi perfil.png"


function navBar() {
 

  return (
    <div className="navbarbox">
    <nav className="nav-bar_list">
       
        
          <Link to="/Dasboard" className="Vezapp-Item-default" >
              <img src={home} alt=""/>
          </Link>
        
        
          <Link to="/Search" className="Vezapp-Item-default">
            <img src={search} alt=""/>
          </Link>
        
        
          <Link to="/Scan" className="Vezapp-Item-default">
          <img src={Scan} alt=""/>
          </Link>
        
        
          <Link to="/Profile" className="Vezapp-Item-default">
           <img src={Per} alt=""/>
          </Link>
    </nav>
    </div>
  );
}

export default navBar;