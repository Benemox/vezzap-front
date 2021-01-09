import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./Profile.css"
import GoalsGrid from "../../components/GoalsGrid/GoalsGrid"
import NavBar from "../../components/NavBar/NavBar"
import Halfperfil from "../../components/Half-perfil/half-perfil";
import NewFoodBe from "../../components/NewFoodBe/NewFoodBe"

function Profile() {
   
    let Name = "Eva Maria"
    let Range = 101
    const [chapas] = useState([688])
    const [expertise]= useState(["Experta Cervecera"])
    
  return (
    
      <div className="screen-back screen-size">
      <Halfperfil name={Name} range={Range} chapas={chapas} expertise={expertise}/>

      
                <div className='Vezapp-Beer-Card'>
                        <div className= 'Rectangle-44'>
                            <img src="" alt="" className="Size"/>
                        </div>
        
                </div>
          
                <NavBar/>

      </div>
    
  );
 
}

export default Profile;
