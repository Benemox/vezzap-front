import React from "react";
import "./half-perfil.css"

function Halfperfil({name,range,chapas,expertise}){
   
    return(
        <div className="rectangle-1" >
            <div className="profile69">
                <div className="rectangle-2"> 
                <p  className="rectangle-2p bold">{name}</p>
                <p className="rectangle-2p">Rango {range}</p>
                </div>
                <div className="rectangle-3">
                    <p className="rectangle-3p">{chapas}</p>
                    <p className="rectangle-3p1">Vezappas</p>
                </div>
                <div className="rectangle-4">
                    <div className="rectangle-4p"><p className="margin">{expertise}</p></div>
                </div>
            </div>
        </div>

    );
}

export default Halfperfil