import React from "react";
import {Link} from "react-router-dom";
import './Infobeer.css';
import Back from '../../img/Back.png';
import Vecleft from '../../img/Vectorleft.png';
import Vecright from '../../img/Vectorright.png';

function InfoBeer() {
/*
    function rotate() {
				
        if (current == 1) {
            byId("#block-1").removeClass().addClass("active");
            $("#block-2").removeClass().addClass("non-active-top");
            $("#block-3").removeClass().addClass("non-active-bottom");
        } else if (current == 2) {
            $("#block-1").removeClass().addClass("non-active-bottom");
            $("#block-2").removeClass().addClass("active");
            $("#block-3").removeClass().addClass("non-active-top");
        } else {
            $("#block-1").removeClass().addClass("non-active-top");
            $("#block-2").removeClass().addClass("non-active-bottom");
            $("#block-3").removeClass().addClass("active");
        }
    
    }

    $("#rotator div").click(function() {
        current = this.id.substr(6);			
        rotate();
    });

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
                    <div className="active"> {/*<h3 className="description"> this.props.beer.descr_full </h3>*/} </div>
                    <div className="right">{/*  {this.props.beer.image}  */} </div>
                </div>

                <div className="Vleft"> <img src={Vecleft} alt="" /> </div>
                <div className="Vright"> <img src={Vecright} alt="" /> </div>
    </div>
    
  );
}

export default InfoBeer;