import React, { useContext } from "react";
import {Link} from "react-router-dom";
import './Infobeer.css';
import Back from '../../img/Back.png';
import Vecleft from '../../img/Vectorleft.png';
import Vecright from '../../img/Vectorright.png';
import infobeerContext from "../../components/Context/infobeerContext";

function InfoBeer() {

    const Beer = useContext(infobeerContext);

/*
    function atras() {	
            id1.removeClass().addClass("active");
            $("#block-2").removeClass().addClass("non-active-top");
            $("#block-3").removeClass().addClass("non-active-bottom");
    }

    function adelante() {
            byId("#block-1").removeClass().addClass("active");
            $("#block-2").removeClass().addClass("non-active-top");
            $("#block-3").removeClass().addClass("non-active-bottom");
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
                    <div className="left"> {/* {this.props.beer.name} */} </div>
                    
                    {/* <div className="center"> <h3 className="description"> this.props.beer.descr_full </h3> </div>
                    <div className="right">  {this.props.beer.image}  </div> */}
                
                </div>

                <div className="Vleft"> <img src={Vecleft} alt="" /> </div>
                <div className="Vright"> <img src={Vecright} alt="" /> </div>
    </div>
    
  );
}

export default InfoBeer;