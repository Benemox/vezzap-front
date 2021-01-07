import React from "react";
import {Link} from "react-router-dom";
import './NewPolicyPage.css'
import logo from '../../img/Frame.png';




function NewPolicyPage() {

  return (
    <div className="screen-size Container42 screen-search">
      <img src={logo} alt="a" />
            <Link to="/login">  
            
            <button name="checkAge"  className="aceptation-p">Tengo 18 años o más</button>
            
            </Link>
    </div>
  );
}

export default NewPolicyPage;
