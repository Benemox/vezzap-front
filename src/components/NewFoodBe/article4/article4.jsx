import React from "react";
import "./article4.css";
import foto from "../../../img/picture4.jpg"

 const Article4 = ({article}) => {
     
    return (
        
            <div className="rectangule-n1" >
                 <img src={foto} alt="foto maridaje1" className="img-n2"/>
                <div className="rectangule-n3">
                    <p className="margin-bold">Mariscos y quesos</p>
                    <p className="margin99"> De gran influencia alemana, combina perfectamente con cualquier marisco.</p>    
                 </div>
             
            </div>
        
    )
}
export default Article4