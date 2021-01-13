import React from "react";
//import {Link} from "react-router-dom";
import './Article.css'
import NavBar from "../../components/NavBar/NavBar";
import foto from "../../img/picture2.jpg"



function Article() {

  return (
    <div className="screen-size screen-back center-article">
        <div  className="card-plates">
            <h2>Guisos de carne con frutas pasas o ahumados.</h2>
         
                <div className="article-fonts">  
                <h3>  Saca el Vezzapiano que llevas dentro y queda como el mejor anfitrión con estas
                        propuestas de maridaje con cerveza para Navidad. Toma buena nota de los siguientes
                        entrantes y aperitivos.
                    
                        Franzsikaner Dunkel Weissbier es una cerveza sensual para 
                        disfrutar durante las comidas prolongadas y los momentos de ocio.
                        Gracias a sus notas especiadas y frescas procedentes del trigo, 
                        junto con los aromas a caramelo de las maltas, las notas frutales a plátano,
                        su ligera acidez y la buena carbonatación, resulta ideal para conjugar con platos
                        de textura untuosa y muy aromáticos. </h3>
                </div>
                <div className="width-foto"> <img src={foto} alt="" className="imgmark" /> </div>
        </div>
        
            < NavBar />
    </div>
  );
}

export default Article;
