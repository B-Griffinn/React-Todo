import React from 'react';
// your components will all go in this `component` directory.
// display a list of todos
//an input field
// a submit button
//and a clear all button.
// <TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array. 

import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
      {props.todos.map(todo => (
        <Todo
          handleToggleComplete={props.handleToggleComplete}
          key={todo.id}
          todo={todo}
        />
      ))}
        {console.log(props.todos)}
    </div>
  );
};

export default TodoList;

