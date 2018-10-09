import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from '../actions/index';

class ConnectedList extends Component {

  render() {
    const { todos } = this.props;

    return (<div>
      {
        todos.map(todo => (
          <li 
            key={todo.id}
            onClick={() => this.props.toggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}
          >
            {todo.text}
          </li>
        ))
      }
    </div>
    )
  }
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
      case 'SHOW_ALL':
      default:
        return todos;
  }
}

const mapStateToProps = state => {
  return { todos: getVisibleTodos(state.todos, state.visibilityFilter) };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: id => dispatch(toggleTodo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);