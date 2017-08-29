import React, { Component } from 'react';
import logo from '../logo.svg';
import Title from '../components/title'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Poonsht'
        }
    }
  render() {
    return (
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <Title name= {this.state.name} text = "message"/>
        </div>  
    );
  }
}

export default App;
