import React, { useState } from 'react';
import Header from './Header';
import TodosList from './TodosList';

const TodoContainer = () => {
  const todo = [
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ];

  const [todos, setTodos] = useState(todo);

  const handleStatusChange = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <Header />
      <TodosList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
};

export default TodoContainer;
