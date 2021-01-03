import React from 'react'
import { Link } from "react-router-dom";
import "./Scan.css"
import QrReader from "../../components/QrReader/QrReader"
import  Barcode from "../../components/BarCodeReader/BarCodeReader"
import WebcamScreenShot from  "../../components/webcamScreenShot/ScreenShot"

function Scan() {
    
      
      
       
    const but = ">"
    return (
      <div className="Escner-etiquetas">
          <div className= "VezappNav-Bar">
             <Link to="/Dasboard" className="Size"><button>{but}</button></Link>
             <p className="Frame-2">Escaner</p>
             <img src="" alt="" className="Ellipse-1"/>
             <br/>
          </div>
          <br/>
          <br/> 
          {/* <WebcamScreenShot/> */}
          {/* <QrReader/> */}
        <Barcode/>
        
      </div>
    );
  }
  
  export default Scan;