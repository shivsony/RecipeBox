import React, { Component } from 'react';
import ControlledExpansionPanels from './components/ControlledExpansionPanels/ControlledExpansionPanels';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import PopUp from './components/PopUp/PopUp';
import './App.css';

let mydata = sessionStorage.getItem('data') ? JSON.parse(sessionStorage.getItem('data')) : [
  {
    heading: 'Garlic Chicken',
    gradients: [
      '3 tablespoons butter',
      '1 teaspoon seasoning salt',
      '1 teaspoon onion powder',
      '4 skinless, boneless chicken breast halves',
      '2 teaspoons garlic powder',
    ],
    directions: [
      'Melt butter in a large skillet over medium high heat.',
      'Add chicken and sprinkle with garlic powder, seasoning salt and onion powder',
      'Saute about 10 to 15 minutes on each side, or until chicken is cooked through and juices run clear.'
    ]
  }
];

sessionStorage.setItem("data",JSON.stringify(mydata));

var items = JSON.parse(sessionStorage.getItem("data"));

//console.log(items.heading);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: items
    }
  }

  handelClick(event) {
    event.preventDefault();
    var items = JSON.parse(sessionStorage.getItem("data"));
    this.setState({
      recipes: items
    });
    //console.log(this.state.recipes);
  }

  render() {
    var allRecipies = this.state.recipes.map( (element,i) => {
      if(element){
        return(<ControlledExpansionPanels heading={this.state.recipes[i].heading} keys={i}/>);
      }
    });
    return (
      <div className="App">
        <header className="App-header">
          <span className="App-title">Recipe Box</span>
        </header>
        {allRecipies}
        <div className="popup">
          <PopUp classes={null}/>
        </div>
        
      </div>
    );
  }
}
library.add(faStroopwafel)
export default App;
