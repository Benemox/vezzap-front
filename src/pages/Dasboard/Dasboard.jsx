import React,{useState} from "react";
import { Link} from "react-router-dom";
import "./Dasboard.css"
import GoalsGrid from "../../components/GoalsGrid/GoalsGrid"
import NavBar from "../../components/NavBar/NavBar"
import Halfperfil from "../../components/Half-perfil/half-perfil";
import NewFoodBe from "../../components/NewFoodBe/NewFoodBe"
function Dasboard() {
    
   const [Goals] = useState([1,2,3])
    let Name = "Eva Maria"
    let Range = 101
    const [chapas] = useState([688])
    const [expertise]= useState(["Experta Cervecera"])
  return (
    
      <div className="screen-white screen-size">
      <Halfperfil name={Name} range={Range} chapas={chapas} expertise={expertise}/>
      <h2 className='title-dash'>¿Platos y Cerveza?</h2>
      <NewFoodBe/>    
      <NewFoodBe/>
      <NewFoodBe/>
      <NewFoodBe/>
      <NewFoodBe/>
      <NewFoodBe/>

      <NavBar/>

      </div>
    
  );
 
}

export default Dasboard;

{/* <div className="Goals">
          {   Goals.map(goal => 
                              <GoalsGrid
                                  key={goal}
                                  Goal = {goal}
                                  />)}
          </div> */}