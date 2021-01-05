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
    let article
  return (
    <div className="screen-init65">

      <Halfperfil name={Name} range={Range} chapas={chapas} expertise={expertise}/>

      <NewFoodBe/>
{/* 
     
      <div className="Goals">
    {   Goals.map(goal => 
                        <GoalsGrid
                             key={goal}
                            Goal = {goal}
                             />)}
    </div> */}
     <NavBar/>
    </div>
  );
 
}

export default Dasboard;
