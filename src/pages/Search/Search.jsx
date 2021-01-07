import './Search.css';
import React, { Component } from 'react';
import DrawFinder from '../../components/DrawFinder/DrawFinder'
import Finder from "../../components/Finder/Finder"
import NavBar from "../../components/NavBar/NavBar";

class Search extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      buscando: '',
      //
      tasks : ["comprar pan", "dividir pan","vender pan","nueva"]
    };
  }

  // esto es igual a un onChange
  miBuscador = (event) => {
    this.setState({ buscando: event.target.value });
  }
  
  pintarTareas = () => {
    return this.state.tasks
            .filter((el) => {
              return el.toLowerCase().includes(this.state.buscando.toLowerCase())
            })
            .map((valor) => {
              return <DrawFinder taskText={valor} />
            });
  }

render(){

  return (
// dentro de la primera etiqueta html q ya convierte el resto en JSX dentro no se puede poner un comentario :)
  <div className="screen-size screen-search">
      
      <div class="title"></div>

      <Finder ph={"  Busca tu cerveza aquí!"} mb={this.miBuscador} />
    
      {this.pintarTareas()}  {/* este metodo se llama en el constructor y mete directamente el componente TASK y su estado */}
      
      <NavBar />
  </div>
  );
  }
}

export default Search;
