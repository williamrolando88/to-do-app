import React, { useState } from 'react';
import styles from './TodoItem.module.css';
import { FaTrash } from 'react-icons/fa';

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);
  const {
    todo: { id, completed, title },
    onStatusChange,
    onDeleteTodo,
    onUpdateItem,
  } = props;

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const onEditItem = () => {
    setEditing(true);
  };

  const onFinishEdit = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className={styles.item}>
      <div style={viewMode} onDoubleClick={onEditItem}>
        <input
          type="checkbox"
          className={styles.checkbox}
          name={id}
          checked={completed}
          onChange={() => onStatusChange(id)}
        />
        <span style={completed ? completedStyle : null}>{title}</span>
        <button type="button" onClick={() => onDeleteTodo(id)}>
          <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
        </button>
      </div>

      <input
        style={editMode}
        type="text"
        className={styles.textInput}
        value={title}
        onChange={(e) => onUpdateItem(e.target.value, id)}
        onKeyDown={onFinishEdit}
      />
    </li>
  );
};

export default TodoItem;
