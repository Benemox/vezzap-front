import './Search.css';
import React, { Component } from 'react';
import DrawFinder from '../../components/DrawFinder/DrawFinder'
import Finder from "../../components/Finder/Finder"
import NavBar from "../../components/NavBar/NavBar";
import Back from '../../img/Back.png';
import Filtro from '../../img/filtro.png';



class Search extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      buscando: '',
      //
      cervezas : [],
      
    };
  }
  componentDidMount(){
    this.databeer();
  }
  // esto es igual a un onChange
  miBuscador = (event) => {
    this.setState({ buscando: event.target.value });
  };
  
  databeer(){
    fetch('http://localhost:8080/Beer')
    .then(response =>response.json())
    .then(Data =>{
      const cervezas = []
      console.log(Data);
      Data.map(beer =>(
          cervezas.push({
            name: `${beer.name}`,
            IDBEER: `${beer.name}`,
            descr_full: `${beer.descr_full}`,
            image : `${beer.image}`
          })
        ))
      return cervezas})
    .then(cervezas => this.setState({cervezas}))
    .catch(error=>console.log(error))
  }

 

  pintarTareas = () => {
    return this.state.cervezas
            .filter((cerveza) => {
              return cerveza.name.toLowerCase().includes(this.state.buscando.toLowerCase())
            })
            .map((valor) => {
             return <DrawFinder beer={valor} />
            });
  }

render(){

  return (
// dentro de la primera etiqueta html q ya convierte el resto en JSX dentro no se puede poner un comentario :)
  <div className="screen-size screen-search">
          <div className="title">
              <div className="backimg">
                    <img  src={Back} alt="" />
              </div>
              <div className="searchtitle">      
                <p className="toptitle">Buscar</p>
              </div>      
              <div className="filtroimg" > 
                    <img  src={Filtro} alt="" />
              </div>
          </div>
      <Finder ph={"  Busca tu cerveza aquí!"} mb={this.miBuscador} />
    
      {this.pintarTareas()}{/*this.getNoticias()*/}

      <NavBar />
  </div>
  );
  }
}

export default Search;
