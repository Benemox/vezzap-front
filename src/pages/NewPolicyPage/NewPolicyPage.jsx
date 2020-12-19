import React from "react";
import { BrowserRouter as  Link} from "react-router-dom";
import './NewPolicyPage.css'




function NewPolicyPage() {

  return (
    <div className="new-policy-page">
        <Link to="/register" className="nav-bar_list-li">  <input type="checkbox" name="checkAge" className="rectangle-33"/></Link>
        <p className= "aceptation-p">Tengo 18 años o más</p>
    </div>
  );
}

export default NewPolicyPage;
