import React from 'react'
import "./Scan.css"
import  Barcode from "../../components/BarCodeReader/BarCodeReader"
import NavBar from "../../components/NavBar/NavBar";

import Toptitle from "../../components/Toptitle/toptitle"


function Scan() {
    
    return (
      
<div className="screen-size screen-scan">
<Toptitle />
          <div className="Escner-etiquetas">
              <div className= "VezappNav-Bar">
                <p className="Frame-2">Escaner</p>
                <img src="" alt="" className="Ellipse-1"/>
                <br/>
              </div>
              <br/>
              <br/> 
              
            {/* <Barcode/> */}
            < NavBar />
          </div>       
</div>
        );
  }
  
  export default Scan;