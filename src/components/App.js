import React, { Component } from 'react';
import List from './List';
import AddTodo from './AddTodo';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Todos</h1>
        </header>
        <AddTodo />
        <List />
      </div>
    );
  }
}

export default App;
