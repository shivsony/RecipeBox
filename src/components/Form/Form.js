import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

class Form extends React.Component {
  handleChange = event => {
    var name = document.querySelector('input')
    event.preventDefault();
    sessionStorage.setItem("name",name.value );
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