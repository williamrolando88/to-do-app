import React from 'react';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const { todos, onStatusChange, onDeleteTodo } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onStatusChange={onStatusChange}
        />
      ))}
    </ul>
  );
};

export default TodosList;
