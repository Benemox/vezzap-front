import React, { useContext } from "react";
import {Link, NavLink} from "react-router-dom";
import './Infobeer.css';
import Back from '../../img/Back.png';
import Vecleft from '../../img/Vectorleft.png';
import Vecright from '../../img/Vectorright.png';
import infobeerContext from "../../components/Context/infobeerContext";
import NavBar from "../../components/NavBar/NavBar"

function InfoBeer() {

    const Beer = useContext(infobeerContext);
    //const Data = Beer.InfoBeer
    console.log(Beer);

     const funcionrotaratras = () => {
        let card = document.querySelectorAll(".card");
            let items = Array.from(card).map(elem => {
                if (elem.className === "card center") return elem.setAttribute("class", "card left")
                if (elem.className === "card right") return elem.setAttribute("class", "card center");
                if (elem.className === "card left") return elem.setAttribute("class", "card right");
         })
    }

    const funcionrotaradelante = () => {
        let card = document.querySelectorAll(".card");
            let items = Array.from(card).map(elem => {
                if (elem.className === "card center") return elem.setAttribute("class", "card right")
                if (elem.className === "card right") return elem.setAttribute("class", "card left");
                if (elem.className === "card left") return elem.setAttribute("class", "card center");
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
                    <div className="card left"> {Beer.beerInfo.name}  </div>
                    {console.log(Beer.beerInfo.name)}
                    <div className="card center"> <h3 className="description"> {Beer.descr_full} </h3> </div>
                    <div className="card right"> 
                     {Beer.image}  
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