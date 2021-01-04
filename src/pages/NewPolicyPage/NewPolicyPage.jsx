import React from "react";
import {Link} from "react-router-dom";
import './NewPolicyPage.css'




function NewPolicyPage() {

  return (
    <div className="new-policy-page">
        <Link to="/login">  
        <button name="checkAge"  className="aceptation-p">Tengo 18 años o más</button>
        
        </Link>
    </div>
  );
}

export default NewPolicyPage;
