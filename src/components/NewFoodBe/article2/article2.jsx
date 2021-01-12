import React from "react";
import "./article2.css";
import foto from "../../../img/picture2.jpg"

 const Article2 = ({article}) => {
     
    return (
        
            <div className="rectangule-n1" >
                 <img src={foto} alt="foto maridaje1" className="img-n2"/>
                <div className="rectangule-n3">
                    <p className="margin-bold">Guisos de carne</p>
                    <p className="margin99"> Franzsikaner Dunkel Weissbier es una cerveza sensual para disfrutar durante las comidas prolongadas.</p>    
                 </div>
             
            </div>
        
    )
}
export default Article2