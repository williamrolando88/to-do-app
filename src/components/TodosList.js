import React from 'react';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const {
    todos, onStatusChange, onDeleteTodo, onUpdateItem,
  } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onStatusChange={onStatusChange}
          onUpdateItem={onUpdateItem}
        />
      ))}
    </ul>
  );
};

export default TodosList;
