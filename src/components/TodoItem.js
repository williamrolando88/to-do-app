import React from 'react';

const TodoItem = (props) => {
  const { todo, onStatusChange } = props;
  return (
    <li>
      <input
        type='checkbox'
        name={todo.id}
        checked={todo.completed}
        onChange={() => onStatusChange(todo.id)}
      />
      {todo.title}
    </li>
  );
};

export default TodoItem;
