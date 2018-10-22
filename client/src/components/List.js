import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleTodo, fetchTodoList } from '../actions';

class ConnectedList extends Component {

  componentDidMount() {
    this.props.loadTodoList();
  }

  render() {
    const { todos, isLoading, error } = this.props;

    return (
      <div>
        {isLoading && <p>Loading todos list ... </p>}
        {!isLoading && !error && 
            (
              todos.map(todo => (
                <li
                  key={todo._id}
                  onClick={() => this.props.toggleTodo(todo._id)}
                  style={{
                    textDecoration: todo.completed ? 'line-through' : 'none'
                  }}
                >
                  {todo.text}
                </li>
              ))
            )
        }

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
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
  return {
    todos: getVisibleTodos(state.todos.list, state.visibilityFilter),
    isLoading: state.todos.isLoading,
    error: state.todos.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: id => dispatch(toggleTodo(id)),
    loadTodoList: () => dispatch(fetchTodoList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);