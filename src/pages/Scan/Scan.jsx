import React from 'react'
import "./Scan.css"
import  Barcode from "../../components/BarCodeReader/BarCodeReader"
import NavBar from "../../components/NavBar/NavBar";
import Back from '../../img/Back.png';



function Scan() {
    
    return (
      
<div className="screen-size">

          <div className="title2">
              <div className="backimg">
                    {/* <img  src={Back} alt="" /> */}
    </div>
              <div className="searchtitle">      
                <p className="toptitle">Escanear</p>
              </div>    
          </div>
          <div className="Escner-etiquetas screen-scan">
            <Barcode/>
            < NavBar />
          </div>       
</div>
        );
  }
  
  export default Scan;