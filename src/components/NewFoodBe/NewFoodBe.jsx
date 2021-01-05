import React from "react";
import Article1 from "./article1/article1"
import Article2 from "./article2/article2"
import { Link } from "react-router-dom";
import "./NewFoodBe.css"


 const NewFoodBe = () => {
     
    return (
         <div className="foodBe">
             <h2 className=''>¿Platos y Cerveza?</h2>
             <Link to="/Article" > <Article1 /> </Link> 
             <Link to="/Article" > <Article2 /> </Link>         
        </div>
        
    )
}
export default NewFoodBe