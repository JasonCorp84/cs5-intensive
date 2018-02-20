import React, { Component } from 'react';
import './App.css';
import FunctionalComponent from './functionalComponent/functionalComponent.js'
import ParentComponent from './parentComponent/parentComponent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ParentComponent />
      <FunctionalComponent blanket={'hello blanket'}/>
      </div>
    );
  }
}

export default App;
