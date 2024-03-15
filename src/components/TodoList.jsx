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
      {/* Video 37 */}
    </div>
  );
}
export default TodoList;
