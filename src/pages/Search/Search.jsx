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
      cervezas : ["Paulaner", "muerte subita","tostada","maestra"],
      
    };
  }

  // esto es igual a un onChange
  miBuscador = (event) => {
    this.setState({ buscando: event.target.value });
  };
  
  /*
  getBeer = async() => {
    let response = await fetch('http://localhost:8080/Beer')
    let Data = await response.json();
    let Beer = Data.stringify();
    console.log(Beer);
  }
  */

  pintarTareas = () => {
    return this.state.cervezas
            .filter((el) => {
              return el.toLowerCase().includes(this.state.buscando.toLowerCase())
            })
            .map((valor) => {
              return <DrawFinder beerName={valor} />
            });
  }

render(){

  return (
// dentro de la primera etiqueta html q ya convierte el resto en JSX dentro no se puede poner un comentario :)
  <div className="screen-size screen-search">
      
      <div class="title"></div>

      <Finder ph={"  Busca tu cerveza aquí!"} mb={this.miBuscador} />
    
      {this.pintarTareas()}{/*this.getNoticias()*/}

      
      <NavBar />
  </div>
  );
  }
}

export default Search;
