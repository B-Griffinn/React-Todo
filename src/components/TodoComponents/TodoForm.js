/* 
<TodoForm> will hold your input field and your Add Todo and Clear Completed buttons.
Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
Once a todo is submitted, the Todo List should re-render and show the added todo.
*/
    
import React from 'react';

import '../../../src/App.css';


const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="Add Todo"
      />
      <div className="btn-wrapper">
        <button onClick={props.handleAddTodo}>Add Todo</button>
        <button onClick={props.handleClearTodos}>Clear Completed</button>
      </div>
      
    </form>
  );
};

export default TodoForm;
