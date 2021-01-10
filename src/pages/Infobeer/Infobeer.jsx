import React from "react";
import {Link} from "react-router-dom";
import './Infobeer.css'
import Back from '../../img/Back.png';




function InfoBeer() {

  return (
    <div className="screen-size screen-back" >
        <div className="title4">
                                <div className="backimg">
                                        <img  src={Back} alt="" />
                                </div>
        </div>

                <div className="card-beer">
                    <div className="position1"></div>
                <div className="position2"><h3 className="description"> {this.props.beer.descr_full} </h3></div>
                    <div className="position3"></div>
                </div>
        </div>
  );
}

export default InfoBeer;