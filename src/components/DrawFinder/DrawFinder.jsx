import React, { Component } from 'react';
import './DrawFinder.css';


class DrawFinder extends Component {
  constructor(props) {
    super(props);
    this.state = { checking: '' };
  }

  changeCheckbox = () => {
    // Si no esta realizada...
    if(this.state.checking === '') {
      // La marco
      this.setState({ checking : 'checked' })
    }
    else {
      // La desmarco
      this.setState({ checking : '' })
    }
  }

  render() {
    return (
      
        <div>
          
          <h2> {this.props.taskText}</h2>

           <input type="checkbox" checked={this.state.checking} onChange={this.changeCheckbox} />


         

        </div>
      
    );
  }
}

export default DrawFinder;