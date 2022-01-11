import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddItem(title);
    setTitle('');
  };

  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <input
        className='input-text'
        type='text'
        placeholder='Add To Do...'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className='input-submit' type='submit'>
        Submit
        <FaPlusCircle />
      </button>
    </form>
  );
};

export default InputTodo;
