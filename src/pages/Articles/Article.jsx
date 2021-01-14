import React from "react";
import './Article.css'
import NavBar from "../../components/NavBar/NavBar";
import {Link, NavLink} from "react-router-dom";
import Back from '../../img/Back.png';
import article from '../../img/picture2.jpg';



function Article() {

  return (
    <div className="screen-back screen-size">
              
              <div className="title2">
              <Link to="/dasboard"><div className="backimg">
                    <img  src={Back} alt="" />
    </div></Link>
              <div className="searchtitle">      
                <p className="toptitle">Articulo</p>
              </div>    
          </div>

        <div  className="card-plates">

          <img className="img-arti" src={article} alt="" />

            <h2 className="title-arti">Guisos de carne.</h2>
         
                <div className="article-fonts">  
                <h3>  Saca el Vezzapiano que llevas dentro y queda como el mejor anfitrión con estas
                        propuestas de maridaje con cerveza para Navidad. Toma buena nota de los siguientes
                        entrantes y aperitivos.
                    
                        Franzsikaner Dunkel Weissbier es una cerveza sensual para 
                        disfrutar durante las comidas prolongadas y los momentos de ocio.
                        Gracias a sus notas especiadas. </h3>
                </div>
                
        </div>
        
            < NavBar />
            
    </div>
  );
}

export default Article;

//<div className="width-foto"> <img src={foto} alt="" className="imgmark" /> </div>