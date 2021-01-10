import React from "react";
import {Link} from "react-router-dom";
import './Infobeer.css'
import Back from '../../img/Back.png';




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

                <div  id="rotator" className="card-beer">
                    <div id="block-1" className="position1 rotation1"></div>
                    <div id="block-2" className="position2 rotation1">{/*<h3 className="description"> this.props.beer.descr_full </h3>*/}</div>
                    <div id="block-3" className="position3 rotation1"></div> 
                </div>
    </div>
    
  );
}

export default InfoBeer;