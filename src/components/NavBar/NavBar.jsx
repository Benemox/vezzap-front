import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"



function navBar() {
 

  return (
    <nav className="nav-bar_list">
       
        
          <Link to="/Dasboard" className="Vezapp-Item-default">
            <p>Menu</p>
          </Link>
        
        
          <Link to="/Dasboard" className="Vezapp-Item-default">
          <p>Buscar</p>
          </Link>
        
        
          <Link to="/Dasboard" className="Vezapp-Item-default">
          <p>Escanea</p>
          </Link>
        
        
          <Link to="/Dasboard" className="Vezapp-Item-default">
          <p>perfil</p>
          </Link>
    </nav>
  );
}

export default navBar;