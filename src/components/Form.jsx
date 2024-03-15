import { useState } from 'react';
import styles from './form.module.css';

function Form({ setTodos }) {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo === '') return;
    setTodos((prev) => [...prev, todo]);
    setTodo('');
  };
  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type='text'
          value={todo}
          placeholder='Enter something'
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type='submit'
          className={styles.btn}
        >
          Add
        </button>
      </div>
    </form>
  );
}
export default Form;
