import React, { Component } from 'react';
import ControlledExpansionPanels from './components/ControlledExpansionPanels/ControlledExpansionPanels';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span className="App-title">Recipe Box</span>
        </header>
      <ControlledExpansionPanels heading="Veg"/>
      </div>
    );
  }
}

export default App;
