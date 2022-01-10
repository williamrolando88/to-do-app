import React from 'react';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const {
    todo: { id, completed, title },
    onStatusChange,
    onDeleteTodo,
  } = props;

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  return (
    <li className={styles.item}>
      <input
        type='checkbox'
        className={styles.checkbox}
        name={id}
        checked={completed}
        onChange={() => onStatusChange(id)}
      />
      <span style={completed ? completedStyle : null}>{title}</span>
      <button onClick={() => onDeleteTodo(id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
