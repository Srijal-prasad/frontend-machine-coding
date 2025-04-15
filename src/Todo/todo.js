import React, { useState } from 'react';
import './todo.css';

function Todo() {
  const [todos, setTodos] = useState([]);  // To store todo items
  const [newTodo, setNewTodo] = useState('');  // To store the new todo input

  // Handle adding a new todo
  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');  // Clear the input field after adding
    }
  };

  // Handle removing a todo
  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>To-Do App</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)} // Update state on input change
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
