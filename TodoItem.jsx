import React from 'react';

const TodoItem = ({ id, text, completed, onDelete, onToggleComplete }) => {
  return (
    <div className={`todo ${completed ? 'complete' : ''}`}>
      <li className="todo-item">{text}</li>
      <button className="complete-btn" onClick={() => onToggleComplete(id)}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={() => onDelete(id)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default TodoItem ;
