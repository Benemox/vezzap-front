import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

function navBar() {
 

  return (
    <nav className="">
      {/* <div className="nav-bar_list">
        
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
      </div> */}
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>


    </nav>
  );
}

export default navBar;