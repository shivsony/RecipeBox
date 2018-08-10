import React, { Component } from 'react';
import ControlledExpansionPanels from './components/ControlledExpansionPanels/ControlledExpansionPanels';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import PopUp from './components/PopUp/PopUp';
import './App.css';

let mydata = sessionStorage.getItem('data') ? JSON.parse(sessionStorage.getItem('data')) : {
  heading: [],
  gradients: [],
  directions: []
};

sessionStorage.setItem("data",JSON.stringify(mydata));

var items = JSON.parse(sessionStorage.getItem("data"));

console.log(items.heading);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: items.heading
    }
  }

    handelClick(event) {
      event.preventDefault();
      var items = JSON.parse(sessionStorage.getItem("data"));
      this.setState({
        recipes: items.heading
      });
      console.log(this.state.recipes);
    }

  render() { 
    var allRecipies = this.state.recipes.map( (element,i) => {
      if(element){
        return(<ControlledExpansionPanels heading={element} keys={i}/>);
      }
    });
    return (
      <div className="App">
        <header className="App-header">
          <span className="App-title">Recipe Box</span>
        </header>
        {allRecipies}
        <div className="popup">
          <PopUp/>
        </div>
        
      </div>
    );
  }
}
library.add(faStroopwafel)
export default App;
