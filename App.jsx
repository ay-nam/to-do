import React, { useState } from 'react';
import TodoItem from './TodoItem.jsx';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (event) => {
    event.preventDefault();
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <h1>Aynam's Todo List</h1>
      <form id="todo-form">
        <input
          type='text'
          id="todo-input"
          className="todo-input"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit" className="todo-button" onClick={addTodo}>
          <i className="fa-solid fa-pen"></i>
        </button>
      </form>

      <div className="todoContainer">
        <ul id="todo-list" className="todo-list">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              onDelete={() => deleteTodo(todo.id)}
              onToggleComplete={() => toggleComplete(todo.id)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
