import React from "react";
import {Link} from "react-router-dom";
import './NewPolicyPage.css'
import logo from '../../img/Frame.png';
import Brand from '../../img/vlogo.png';

//<img src={logo} alt="a" />


function NewPolicyPage() {

  return (
    <div className="screen-size Container42 screen-search">
      <img className="brand" src={Brand} alt="a" />
         
              <Link to="/login">  
            
                  <button name="checkAge"  className="aceptation-p">Tengo 18 años o más</button>
            
              </Link>
    </div>
  );
}

export default NewPolicyPage;
