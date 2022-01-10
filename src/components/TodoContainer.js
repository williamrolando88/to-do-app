import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

const TodoContainer = () => {
  const todo = [
    {
      id: uuid(),
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: uuid(),
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: uuid(),
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

  const handleAddItem = (title) => {
    const newTodos = [
      ...todos,
      {
        id: uuid(),
        title,
        completed: false,
      },
    ];
    setTodos(newTodos);
  };

  return (
    <div>
      <Header />
      <InputTodo onAddItem={handleAddItem} />
      <TodosList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
};

export default TodoContainer;
