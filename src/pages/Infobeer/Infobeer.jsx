import React, { useContext } from "react";
import {Link} from "react-router-dom";
import './Infobeer.css';
import Back from '../../img/Back.png';
import Vecleft from '../../img/Vectorleft.png';
import Vecright from '../../img/Vectorright.png';
import infobeerContext from "../../components/Context/infobeerContext";
import navBar from "../../components/NavBar/NavBar";

function InfoBeer() {

    const Beer = useContext(infobeerContext);
    console.log(Beer)
     const funcionrotaratras = () => {
        let card = document.querySelectorAll(".card");
            let items = Array.from(card).map(elem => {
                if (elem.className === "card center") return elem.setAttribute("class", "card left")
                if (elem.className === "card right") return elem.setAttribute("class", "card center");
                if (elem.className === "card left") return elem.setAttribute("class", "card right");
         })
    }

/*
    function atras() {	
            removeClass(right).addClass(center);
            removeClass(center).addClass(left);
            removeClass(left).addClass(right);
    }

    function adelante() {
            .removeClass(right).addClass(left);
            .removeClass(left).addClass(center);
            .removeClass(center).addClass(right);
        }
    */

  return (
    <div className="screen-size screen-back" >
        <div className="title4">
                                <div className="backimg">
                                        <img  src={Back} alt="" />
                                </div>
        </div>

                <div className="card-beer">
                    <div className="card left"> {/* {this.props.beer.name} */} </div>
                    
                    <div className="card center"> <h3 className="description"> {/*this.props.beer.descr_full*/} </h3> </div>
                    <div className="card right"> 
                     {/* {this.props.beer.image}  */ } 
                     </div>
                
                </div>

                <button className="Vleft" onClick={funcionrotaratras}> <img src={Vecleft} alt="" /> </button>
                <button className="Vright"> <img src={Vecright} alt="" /> </button>
                <navBar/>
    </div>
    
  );
}

export default InfoBeer;