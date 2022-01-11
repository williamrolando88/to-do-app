import React, { useState } from 'react';

const InputTodo = (props) => {
  const { onAddItem } = props;
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(title);
    setTitle('');
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="input-text"
        type="text"
        placeholder="Add To Do..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="input-submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default InputTodo;
