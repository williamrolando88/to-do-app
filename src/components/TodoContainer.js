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
    const nextTodos = todos;
    console.log(nextTodos.indexOf(id));
    // setTodos()
  };

  return (
    <div>
      <Header />
      <TodosList todos={todos} onStatusChange={handleStatusChange} />
    </div>
  );
};

export default TodoContainer;
