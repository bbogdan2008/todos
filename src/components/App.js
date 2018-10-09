import React, { Component } from 'react';
import List from './List';
import AddTodo from './AddTodo';
import FilterLink from './FilterLink';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>Todos - by bb</h1>
          <hr />
        </header>
        <AddTodo />
        <List />
        <hr />
        Show: 
        <FilterLink filter="SHOW_ALL">All</FilterLink>{' '}
        <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>{' '}
        <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
      </div>
    );
  }
}

export default App;
