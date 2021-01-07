import React, { Component } from 'react';
import './Finder.css';

class Finder extends Component {
  constructor(props) {
    super(props);
   
  }

  render() {

    return (
        <div  className="finderbox">
      <input
        className="inputbox"
        type='text'
        placeholder={this.props.ph}
        onChange={this.props.mb}
      />
        </div>
    );
  }
}

export default Finder;