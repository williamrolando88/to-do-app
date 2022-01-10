import React from 'react';

const TodoItem = (props) => {
  const { todo, onStatusChange, onDeleteTodo } = props;
  return (
    <li>
      <input
        type='checkbox'
        name={todo.id}
        checked={todo.completed}
        onChange={() => onStatusChange(todo.id)}
      />
      {todo.title}
      <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
