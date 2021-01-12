import React from "react";
import Article1 from "./article1/article1"
import Article2 from "./article2/article2"
import Article3 from "./article3/article3"
import Article4 from "./article4/article4"
import Article5 from "./article5/article5"
import Article6 from "./article6/article6"
import { Link } from "react-router-dom";
import "./NewFoodBe.css"


 const NewFoodBe = () => {
     
    return (
         <div className="foodBe">
    
             <Link to="/Article" >
             <Article1 />       
             <Article2 />
             <Article3 />
             <Article4 />
             <Article5 />
             <Article6 />
             </Link>
                      
        </div>
        
    )
}
export default NewFoodBe