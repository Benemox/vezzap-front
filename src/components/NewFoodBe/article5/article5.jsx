import React from "react";
import "./article5.css";
import foto from "../../../img/picture5.jpg"

 const Article5 = ({article}) => {
     
    return (
        
            <div className="rectangule-n1" >
                 <img src={foto} alt="foto maridaje1" className="img-n2"/>
                <div className="rectangule-n3">
                    <p className="margin-bold">mejillones al vapor</p>
                    <p className="margin99"> Como cerveza belga, un buen plan puede ser maridarla con los típicos "moules frites" acompañados de patatas.</p>    
                 </div>
             
            </div>
        
    )
}
export default Article5