import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((response) => response.json())
      .then((data) => setTodos([...data]));

    const loadedTodos = JSON.parse(localStorage.getItem('todos'));
    if (loadedTodos) {
      setTodos([...loadedTodos]);
    }
    return () => {};
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    return () => {};
  }, [todos]);

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
    if (!title) {
      alert('Please add a title!');
      return;
    }
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

  const handleUpdateItem = (updatedTitle, id) => {
    console.log(updatedTitle);
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        console.log(todo);
        return todo;
      }),
    );
  };

  return (
    <div className='container'>
      <div className='inner'>
        <Header />
        <InputTodo onAddItem={handleAddItem} />
        <TodosList
          todos={todos}
          onDeleteTodo={handleDeleteTodo}
          onStatusChange={handleStatusChange}
          onUpdateItem={handleUpdateItem}
        />
      </div>
    </div>
  );
};

export default TodoContainer;
