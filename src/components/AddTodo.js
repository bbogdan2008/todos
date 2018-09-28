import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';
 
class AddTodo extends Component {
  constructor() {
    super();

    this.state = {
      text: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { text } = this.state;
    this.props.addTodo(text);
    this.setState({
      text: ""
    });
  }

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">To do:</label>
          <input
            type="text"
            id="title"
            value={text}
            onChange={this.handleChange}
          />
          <button type="submit">
          Add
        </button>
        </div>
       
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => dispatch(addTodo(text))
  }
}

export default connect(null, mapDispatchToProps)(AddTodo);