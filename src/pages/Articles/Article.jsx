import React from "react";
import {Link} from "react-router-dom";
import './Article.css'
import picture from "../../img/picture3.jpg"
import NavBar from "../../components/NavBar/NavBar";



function Article() {

  return (
    <div className="Art-1">
        <div>
            <h1 className="Center">Maridajes con cerveza para Navidad (I). Entrantes y aperitivos</h1>
         
            <div className="Cen-1">  
                 <img src={picture} alt="aaa" className="img1"/>
                <p>Saca el Vezzapiano que llevas dentro y queda como el mejor anfitrión con estas propuestas de maridaje con cerveza para Navidad. Toma buena nota de los siguientes entrantes y aperitivos.</p>
                
            </div>
            <div>
                <p>Con las navidades a la vuelta de la esquina y más atípicas que nunca, tenemos claro que sí o sí merecen dedicarles tiempo y celebración. Brindando desde la distancia, o con nuestros más íntimos, vamos a rendir tributo a esta época del año sacando nuestro lado más Cervecista.</p>
                <p>Ahora que nos hemos dado cuenta de que esos pequeños instantes son los más valiosos, es el momento de dar rienda suelta a nuestro ingenio foodie y preparar recetas improvisadas, relativamente rápidas, pero sobre todo muy armoniosas para disfrutar alrededor de una buena mesa en compañía de esas cervezas ideales pensadas para cada momento.</p>
                <p>Este año toca innovar y salir del típico vino o las bebidas de siempre para las cenas y aperitivos de Navidad. Sin duda con las siguientes opciones quedarás como el mejor anfitrión porque los maridajes con cerveza son lo más top del momento.</p>
                
                <h2>1. Los mejores aperitivos y un picoteo con Cervezas Guiness Reserva</h2>
               
                <p>La gama de Cervezas Guiness Reserva es muy versátil. Están pensadas para disfrutar en cualquier momento. “La verde” y “La roja” de Guiness inspiran la Navidad en su máximo esplendor, donde siempre hay algún motivo para brindar y compartir unas cervezas tan icónicas para tantos momentos de desconexión y de celebración.
                Guiness Reserva 1925 resulta ideal para alternar con todo tipo de snacks y aperitivos. Unas láminas de jamón ibérico acompañadas de unas almendras fritas son una magnífica opción para conjugar la combinación de notas amargas, dulces y saladas.</p>
                <p>Pensemos también en entrantes como el Antipasti de la gastronomía italiana o en embutidos ahumados como fiambres y mojamas para Alhambra Reserva Roja. Este tipo de maridajes aportarán esa nota sofisticada y decorativa de tonos rojizos y destellantes muy propios para las jornadas navideñas.</p>
            </div>
        
        
        
        </div>
        <div className="NavBarSticky">
            < NavBar />
        </div>
        
    </div>
  );
}

export default Article;
