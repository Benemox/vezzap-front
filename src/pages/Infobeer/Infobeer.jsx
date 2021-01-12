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
                    <div className="card left">
                        <div></div> 
                        <div></div>
                        <div></div>   
                    </div>
                    
                    <div className="card center">
                        <div className=""><img src={Beer.beerInfo.image} alt="" className="center-img" /></div>
                        <div className="center-title">{Beer.beerInfo.name}</div>
                        <div className="center-short">{Beer.beerInfo.descr_short}</div>
                    </div>
                        
                    <div className="card right"> 
                        <div className="right-title">Sobre ella</div>
                        <div className="right-full">{Beer.beerInfo.descr_full}</div>
                        <div className="ninja-estilo">Estilo</div>
                        <div className="right-estilo">{Beer.beerInfo.estilo}</div>
                        <div className="ninja-origen">Origen</div>
                        <div className="right-origen">{Beer.beerInfo.origen}</div>

                        
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
// {Beer.beerInfo.name}
// {Beer.beerInfo.color}
// {Beer.beerInfo.origen}
// {Beer.beerInfo.lupulos}
// {Beer.beerInfo.estilo}
// {Beer.beerInfo.descr_short}
// {Beer.beerInfo.descr_full}
// {Beer.beerInfo.porcentaje_alcohol}
// {Beer.beerInfo.image}

{/* <div className="ninja-lupulo">Lupulos</div>
                        <div className="right-lupulo">{Beer.beerInfo.lupulos}</div>
                        <div className="right-alcohol">{Beer.beerInfo.porcentaje_alcohol}</div>
                        <div className="ninja-alcohol">Alc.</div> */}