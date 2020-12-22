import React, { Component } from 'react';
import './finder.css';

class Finder extends Component {
  constructor(props) {
    super(props);
   
  }

  render() {

    return (
        <div>
      <input
        type='text'
        placeholder={this.props.ph}
        onChange={this.props.mb}
      />
        </div>
    );
  }
}

export default Finder;