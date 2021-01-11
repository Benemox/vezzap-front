import React, { Component } from 'react';
import './DrawFinder.css';
import defaultimg from "../../img/defaultbeer.png"
import {infobeerConsumer, InfobeerConsumer} from "../Context/infobeerContext"
import {withRouter} from "react-router-dom"

class DrawFinder extends Component {
  constructor(props) {
    super(props);
    this.state = { checking: '' };
  }
 
gotoBeerinfo = (value) => { 
value.setbeerInfo(this.props.beer);
this.props.history.push("/Infobeer");
}

  render() {
    let prueba = this.props.beer.image ? this.props.beer.image : defaultimg
    return (
      
      <InfobeerConsumer>
        { (value) => {
          ;
          return (
            
      <div className="drawfinderbox" onClick={() => this.gotoBeerinfo(value)}>
              <img className="imgDrawbeer" src={prueba} alt="" /> 
              <div className="beername"> <h2> {this.props.beer.name} </h2> </div>
              <div className="descrip-beer"> <h3 className="description"> {this.props.beer.descr_full} </h3> </div> 
      
      </div>
          );
        }}
      </InfobeerConsumer>
       
        
    );
  }
}

export default withRouter(DrawFinder);