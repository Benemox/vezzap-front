import React from "react";

import "./GoalsGrid.css"


 const GoalsGrid = ({Goal}) => {
     
    return (
         <div className="Vezappgoal">
             <h2 className=''>{Goal}</h2>
             <p className='Short-description'>merito que tiene aqui</p>
             <p>10/20</p>
        </div>
        
    )
}
export default GoalsGrid