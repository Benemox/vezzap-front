import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./Profile.css"
import NavBar from "../../components/NavBar/NavBar"
import Halfperfil from "../../components/Half-perfil/half-perfil";
import Back from '../../img/Back.png';
import Settings from '../../img/settings.png';
import Logout from '../../img/logout.png';
import Chall from '../../img/chall.png';
import Friends from '../../img/friends.png';


function Profile() {
   
    let Name = "Eva Maria"
    let Range = 101
    const [chapas] = useState([688])
    const [expertise]= useState(["Experta Cervecera"])
    
  return (
    
      <div className="screen-white screen-size">

                    <div className="title3">
                                <div className="backimg">
                                        <img  src={Back} alt="" />
                                </div>
                                <div className="searchtitle">      
                                    <p className="toptitle">Tu perfil</p>
                                </div>      
                                <div className="filtroimg" > 
                                        <img  src={Settings} alt="" />
                                </div>
                    </div>

                <Halfperfil name={Name} range={Range} chapas={chapas} expertise={expertise}/>
{/*
                    <div className="" > 
                                        <img className="logoutimg"  src={Logout} alt="" />
                    </div>
                    */}


                    <div className="Mybeertitle">      
                                    <p className="Mybeertitle2">Mi cervecería</p>
                    </div> 

                    <div className="challenge-box">
                    <img  src={Chall} alt="" className="imgchall" /><img  src={Friends} alt="" className="imgchall" />
                    </div>

                <NavBar/>

      </div>
    
  );
 
}

export default Profile;
