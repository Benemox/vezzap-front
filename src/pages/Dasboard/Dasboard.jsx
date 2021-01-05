import React,{useState} from "react";
import { Link} from "react-router-dom";
import "./Dasboard.css"
import GoalsGrid from "../../components/GoalsGrid/GoalsGrid"
import NavBar from "../../components/NavBar/NavBar"
import Halfperfil from "../../components/Half-perfil/half-perfil";

function Dasboard() {
   const [Goals] = useState([1,2,3])
    let Name = "pepe"
    let Range = 100
  return (
    <div className="screen-init65">
      <Halfperfil />
   
    <div className='Vezapp-Beer-Card'>
            <div className= 'Rectangle-44'>
                <img src="" alt="" className="Size"/>
            </div>
            <div className='Card-Gost'>
                <p className='experimenta'>Experimenta</p>
                    <p className='Drink-today'>¿Que comemos y bebemos hoy?</p>
            </div>            
    </div>
    <div className="Goals">
    {   Goals.map(goal => 
                        <GoalsGrid
                             key={goal}
                            Goal = {goal}
                             />)}
    </div>
     <NavBar/>
    </div>
  );
 
}

export default Dasboard;
