import React from 'react'
import "./Scan.css"
import  Barcode from "../../components/BarCodeReader/BarCodeReader"
import NavBar from "../../components/NavBar/NavBar";
import scn from "../../img/Frame Header.png"

function Scan() {
    
    return (
      <div className="Escn">
          <div className= "header-S1">
             <img src={scn} alt="Escanear"/>
          </div>
        {/* <div><Barcode clasname="Scn-1"/></div> */}
        < NavBar />
        
      </div>
    );
  }
  
  export default Scan;