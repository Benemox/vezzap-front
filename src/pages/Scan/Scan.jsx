import React from 'react'
import "./Scan.css"
import  Barcode from "../../components/BarCodeReader/BarCodeReader"
import NavBar from "../../components/NavBar/NavBar";
import Back from '../../img/Back.png';
import Filtro from '../../img/filtro.png';


function Scan() {
    
    return (
      
<div className="screen-size">

          <div className="title2">
              <div className="backimg">
                    <img  src={Back} alt="" />
              </div>
              <div className="searchtitle">      
                <p className="toptitle">Escanear</p>
              </div>    
                
             {/* <div className="filtroimg" > 
                    <img  src={Filtro} alt="" />
    </div> */}
          </div>


          <div className="Escner-etiquetas screen-scan">
              <div className= "VezappNav-Bar">
                {/* <p className="Frame-2">Escaner</p>*/}
                <img src="" alt="" className="Ellipse-1"/>
                <br/>
              </div>
              <br/>
              <br/> 
              
            {/* <Barcode className="prueba"/> */}

            < NavBar />
          </div>       
</div>
        );
  }
  
  export default Scan;