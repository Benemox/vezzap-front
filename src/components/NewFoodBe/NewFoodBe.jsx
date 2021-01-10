import React from "react";
import Article1 from "./article1/article1"
import { Link } from "react-router-dom";
import "./NewFoodBe.css"


 const NewFoodBe = () => {
     
    return (
         <div className="foodBe">
    
             <Link to="/Article" > <Article1 /> </Link> 
                      
        </div>
        
    )
}
export default NewFoodBe