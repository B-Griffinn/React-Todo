// <Todo /> is a component that takes in the todo data and displays the task to the screen.

import React from 'react';

import './Todo.css'

const Todo = props => {
  return (
    <div
    className="todo"
      style={props.todo.completed ? { textDecoration: 'line-through' } : null}
      onClick={() => props.handleToggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};

export default Todo;
