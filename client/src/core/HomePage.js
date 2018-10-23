import React, { Component } from 'react';

import AddTodo from '../todo/list/components/AddTodo';
import List from '../todo/list/components/List';
import FilterLink from '../todo/list/components/FilterLink';

class HomePage extends Component {
  render() {
    return(
      <div className="container">
        <header>
          <h1>Todos</h1>
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

export default HomePage;