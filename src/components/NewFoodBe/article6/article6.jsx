import React from "react";
import "./article6.css";
import foto from "../../../img/picture6.jpg"

 const Article6 = ({article}) => {
     
    return (
        
            <div className="rectangule-n1" >
                 <img src={foto} alt="foto maridaje1" className="img-n2"/>
                <div className="rectangule-n3">
                    <p className="margin-bold">Quesos curados</p>
                    <p className="margin99">Leffe Brune es una cerveza robusta, por lo que acompaña muy bien con productos intensos como los quesos curados.</p>    
                 </div>
             
            </div>
        
    )
}
export default Article6