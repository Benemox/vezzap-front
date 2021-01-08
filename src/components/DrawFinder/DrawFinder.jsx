import React, { Component } from 'react';
import './DrawFinder.css';
import logo from '../../img/Frame.png';

class DrawFinder extends Component {
  constructor(props) {
    super(props);
    this.state = { checking: '' };
  }
 /*
  changeCheckbox = () => {
    // Si no esta realizada...
    if(this.state.checking === '') {
      // La marco
      this.setState({ checking : 'checked' })
    }
    else {
      // La desmarco
      this.setState({ checking : '' })
    }
  }
  */

  render() {
    return (
      
        <div className="drawfinderbox">
            <img className="imgDrawbeer" src={logo} alt="" /> {/* src={this.props.imgBeer} */ }
            <div className="beername"> <h2> {this.props.beerName} </h2> </div>
            <div className="descrip-beer"> <h3 className="description"> aqui va la descripcion q esta llena de maticez, taninos 
              y enriquecedoras palabras {/* {this.props.descripBeer} */} </h3> </div>


{/* <input type="checkbox" checked={this.state.checking} onChange={this.changeCheckbox} /> */}

        </div>
      
    );
  }
}

export default DrawFinder;