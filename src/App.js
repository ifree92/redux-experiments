import React, { Component } from 'react';
import './App.css';
import Counter from  "./components/Counter";

class App extends Component {
  render() {
    return (
        <Counter store={this.props.store}/>
    );
  }
}

export default App;
