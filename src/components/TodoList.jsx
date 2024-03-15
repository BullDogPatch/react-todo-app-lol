import { useState } from 'react';
import TodoItem from './TodoItem';
import styles from './todolist.module.css';

function TodoList({ todos }) {
  return (
    <div className={styles.todolist}>
      {todos
        ? todos.map((item) => (
            <TodoItem
              key={Math.random() * Date.now()}
              item={item}
            />
          ))
        : ''}
    </div>
  );
}

export default TodoList;
