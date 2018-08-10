import React from 'react';
import './Form.css';

class Form extends React.Component {
  handleChange(event) {
    var name = document.querySelector('input')
    //console.log(name.value);
    var items = JSON.parse(sessionStorage.getItem("data"));
    items.heading.push(name.value);
    name.value = '';
    sessionStorage.setItem("data",JSON.stringify(items));
  };

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleChange.bind(this)}>
          <input type="text" placeholder="Recipie Name..."/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;