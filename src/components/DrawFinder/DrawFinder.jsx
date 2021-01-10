import React, { Component } from 'react';
import './DrawFinder.css';
import defaultimg from "../../img/defaultbeer.png"

class DrawFinder extends Component {
  constructor(props) {
    super(props);
    this.state = { checking: '' };
  }
 
  render() {
    let prueba = this.props.beer.image ? this.props.beer.image : defaultimg
    return (
      
        <div className="drawfinderbox">
            <img className="imgDrawbeer" src={prueba} alt="" /> 
            <div className="beername"> <h2> {this.props.beer.name} </h2> </div>
            <div className="descrip-beer"> <h3 className="description"> {this.props.beer.descr_full} </h3> 
            </div>
        </div>
      
    );
  }
}

export default DrawFinder;