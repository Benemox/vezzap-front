import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

function navBar() {
  return (
    <nav className="Tab-Bar-4-Tabs">
      <div className="nav-bar_list">
        
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
          <p>FeelBear</p>
          </Link>
      </div>
    </nav>
  );
}

export default navBar;