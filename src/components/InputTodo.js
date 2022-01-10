import React, { useState } from 'react';

const InputTodo = (props) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddItem(title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add To Do...'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default InputTodo;
