import React from "react";
import "./article1.css";
import foto from "../../../img/picture1.jpg"

 const Article1 = ({article}) => {
     
    return (
        
            <div className="rectangule-n1" >
                 <img src={foto} alt="foto maridaje1" className="img-n2"/>
                <div className="rectangule-n3">
                    <p className="margin-bold">Picatostes & Guinness</p>
                    <p className="margin99"> Queda como el mejor anfitrión con estas propuestas de maridaje con Guinness.</p>    
                 </div>
             
            </div>
        
    )
}
export default Article1