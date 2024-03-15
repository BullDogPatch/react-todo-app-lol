import { useState } from 'react';
import TodoItem from './TodoItem';
import Form from './Form';
import TodoList from './TodoList';

const Todo = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Form setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
};

export default Todo;
