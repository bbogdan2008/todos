import React from 'react';
import { connect } from 'react-redux';

const ConnectedList = ({ todos }) => (
  <div>
    {
      todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
        </li>
      ))
    }

  </div>
);

const mapStateToProps = state => {
  return {todos: state.todos};
};

const List = connect(mapStateToProps)(ConnectedList);
export default List;