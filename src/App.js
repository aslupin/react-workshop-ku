import React, { Component } from 'react';
import './App.css';
import Header from './containers/Header'
class App extends Component {
  constructor(props){
        super(props);
        this.state = {
          number: 0,
          data: [1,2,3,4]
        }
  }
  ComponentDidMount(){
    this.setState({
      number: 1
    })
  }
  shouldComponentUpdate(nextProps, nextState){
    if(nextState.number < 0){
      return false;
    }
    return true;
  }
  increase(){
    this.setState({
      number: this.state.number + 1
    })
  }
  decrease = () => {
    this.setState({
      number: this.state.number - 1
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <p>{this.state.number}</p>
        <button onClick={this.increase.bind(this)}>+</button>
        <button onClick={this.decrease}>-</button>
        {
          this.state.data.map(d=> <div>{d}</div>)
        }
      </div>
    );
  }
}

export default App;
