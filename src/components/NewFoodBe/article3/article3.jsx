import React from "react";
import "./article3.css";
import foto from "../../../img/picture3.jpg"

 const Article3 = ({article}) => {
     
    return (
        
            <div className="rectangule-n1" >
                 <img src={foto} alt="foto maridaje1" className="img-n2"/>
                <div className="rectangule-n3">
                    <p className="margin-bold">Quesos azules y carnes</p>
                    <p className="margin99">La American IPA más imprescindible que marida a la perfección con multitud de platos.</p>    
                 </div>
             
            </div>
        
    )
}
export default Article3