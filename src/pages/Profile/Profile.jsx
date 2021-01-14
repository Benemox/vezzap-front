import React,{useState,} from "react";
//import { Link } from "react-router-dom";
import "./Profile.css"
import NavBar from "../../components/NavBar/NavBar"
import Halfperfil from "../../components/Half-perfil/half-perfil";
import Back from '../../img/Back.png';
import Settings from '../../img/settings.png';
import Logout from '../../img/logout.png';
import Chall from '../../img/chall.png';
import Friends from '../../img/friends.png';
import Discount from '../../img/discount.png';
import Locals from '../../img/locals.png';
import Myfavbeers from '../../img/myfavbeers.png';
import Changeimg from '../../img/changeimg.png';
import Changepass from '../../img/changepass.png';
import Privacy from '../../img/privacy.png';
import { useHistory } from "react-router-dom";



function Profile() {
   const history =useHistory()
    let Name = "Eva Maria"
    let Range = 101
    const [chapas] = useState([688])
    const [expertise]= useState(["Experta Cervecera"])
    const redirect = () => {
        history.push('/privazyPolicy')
        
      }
  return (
    
      <div className="screen-white screen-size">

                    <div className="title3">
                                <div className="backimg">
                                        {/* <img  src={Back} alt="" /> */}
                                </div>
                                <div className="searchtitle">      
                                    <p className="toptitle">Tu perfil</p>
                                </div>      
                                <div className="filtroimg" > 
                                        <img  src={Settings} alt="" />
                                </div>
                    </div>

                <Halfperfil name={Name} range={Range} chapas={chapas} expertise={expertise}/>
{/* ///////// esto se puede coger para replicar en AJUSTES y hacer una nueva pagina estatica
                    
                                        <img className="logoutimg"  src={Logout} alt="" />
                    
   */}                 


                    <div className="Mybeertitle">      
                                    <p className="Mybeertitle2">Mi cervecería</p>
                    </div> 

                    <div className="challenge-box">
                        <img  src={Chall} alt="" className="imgchall" />
                        <img  src={Friends} alt="" className="imgchall" />
                        <img  src={Discount} alt="" className="imgchall" />
                        <img  src={Locals} alt="" className="imgchall" />
                        <img  src={Myfavbeers} alt="" className="imgchall" />
                    </div>
                    
                    <div className="challen">
                        <img className="logoutimg"  src={Changeimg} alt="" />
                        <img className="logoutimg"  src={Changepass} alt="" />
                        <img className="logoutimg"  src={Privacy} alt="" onClick={redirect}/>
                        <img className="logoutimg"  src={Logout} alt="" />
                    </div>

                <NavBar/>

      </div>
    
  );
 
}

export default Profile;
