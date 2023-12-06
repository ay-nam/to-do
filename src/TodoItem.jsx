import React from 'react';

const TodoItem = ({ text, completed, onDelete, onToggleComplete }) => {
  return (
    <div className={`todo ${completed ? 'complete' : ''}`}>
      <li className="todo-item">{text}</li>
      <button className="complete-btn" onClick={onToggleComplete}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={onDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default TodoItem;
