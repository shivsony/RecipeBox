import React, { Component } from 'react';
import ControlledExpansionPanels from './components/ControlledExpansionPanels/ControlledExpansionPanels';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import PopUp from './components/PopUp/PopUp';
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: ["chicken","paneer"]
    }
  }

    handelClick(event) {
      event.preventDefault();
      var name = sessionStorage.getItem("name");
      console.log(name)
      var newarr = () => { return this.state.recipes.push(name)};
      this.setState({
        recipes: newarr()
      });
      console.log(this.state.recipes);
    }

  render() {
    var allRecipies = this.state.recipes.map( (element) => {
      return(<ControlledExpansionPanels heading={element}/>);
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
