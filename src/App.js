import React, { Component } from 'react';
import './App.css';
import Backgroud from './components/Background';
import NavLinks from './components/NavLinks';

class App extends Component {
  render() {
    return (
      <div>
          <Backgroud></Backgroud>
          <NavLinks/>
      </div>
    );
  }
}

export default App;
