import React, { useContext } from "react";
import {Link, NavLink} from "react-router-dom";
import './Infobeer.css';
import Back from '../../img/Back.png';
import Vecleft from '../../img/Vectorleft.png';
import Vecright from '../../img/Vectorright.png';
import infobeerContext from "../../components/Context/infobeerContext";
import NavBar from "../../components/NavBar/NavBar"
import mar1 from "../../img/mar1.png";
import mar2 from "../../img/mar2.png";
import mar3 from "../../img/mar3.png";

function InfoBeer() {

    const Beer = useContext(infobeerContext);

     const funcionrotaratras = () => {
        let card = document.querySelectorAll(".card");
        
            let items = Array.from(card).map(elem => {
                
                if (elem.className === "card center") {
                        let e = document.getElementById("dosid")
                        e.setAttribute("class","card dos invisible");
                        return elem.setAttribute("class", "card left");
                } 
                if (elem.className === "card right") {
                        let e = document.getElementById("dosid")
                        e.setAttribute("class","card dos visible");
                        return elem.setAttribute("class", "card center");
                }

                 if (elem.className === "card left") { 
                        let e = document.getElementById("dosid")
                        e.setAttribute("class","card dos invisible");
                        return elem.setAttribute("class", "card right");

                }
       
         })
    }

    const funcionrotaradelante = () => {
        let card = document.querySelectorAll(".card");
            let items = Array.from(card).map(elem => {


                if (elem.className === "card center") {
                        let e = document.getElementById("dosid")
                        e.setAttribute("class","card dos invisible");
                        return elem.setAttribute("class", "card right");
                } 
                if (elem.className === "card right") {
                        let e = document.getElementById("dosid")
                        e.setAttribute("class","card dos invisible");
                 return elem.setAttribute("class", "card left");
                }

                 if (elem.className === "card left") { 
                        let e = document.getElementById("dosid")
                        e.setAttribute("class","card dos visible");
                        return elem.setAttribute("class", "card center");

                }

         })
    }

  return (
    <div className="screen-size screen-back" >
        <div className="title4">
            <Link to="/search" >
                                <div className="backimg">
                                        <img  src={Back} alt="" />
                                </div>
            </Link>
        </div>

        <div className="card-beer">
                <div className="card left">
                     <div className="left-idea">Ideal con...</div> 
                     <div className="left-maridaje"><img src={mar1} alt="" className="mar-content" /></div>
                    <div className="left-maridaje"><img src={mar2} alt="" className="mar-content" /></div>
                    <div className="left-maridaje"><img src={mar3} alt="" className="mar-content" /></div>   
                </div>
                    
                        <div className="card center">
                                <div className=""><img src={Beer.beerInfo.image} alt="" className="center-img" /></div>
                                <div className="center-title">{Beer.beerInfo.name}</div>
                                <div className="center-short">{Beer.beerInfo.descr_short}</div>
                        </div>
                        
                <div className="card right"> 
                        <div className="right-title">Sobre ella</div>
                        <div className="right-full">{Beer.beerInfo.descr_full}</div>
                
                            <div className="boxone">
                                    <div className="right-shadow">Fermentacion</div>
                                    <div className="right-text">{Beer.beerInfo.maltas}</div>
                            </div>
                            <div className="boxone">        
                                    <div className="right-shadow">Malta</div>
                                    <div className="right-text">{Beer.beerInfo.fermentacion}</div>
                            </div>
                    <div id ="dosid" className="card dos invisible">
                        <div className="boxhalf">
                                <div className="right-shadow-half-left">IBU</div>
                                <div className="right-text-half-left">{Beer.beerInfo.ibu}</div>
                        </div>
                        <div className="boxhalf">
                                <div className="right-text-half-right">{Beer.beerInfo.porcentaje_alcohol}%</div>
                                <div className="right-shadow-half-right">Alc.</div>
                        </div>
                    </div>    
                </div>
                
        </div>


                    <div className="Vboth">
                            <div className="Vleft" onClick={funcionrotaratras}> <img src={Vecleft} alt="" /> </div>
                            <div className="Vright" onClick={funcionrotaradelante}> <img src={Vecright} alt="" /> </div>
                    </div>
            <NavBar/>
    </div>
    
  );
}

export default InfoBeer;

//<NavLink to="/faq" activeStyle={{ fontWeight: "bold", color: "red" }}></NavLink> para las bolas blancas :)
