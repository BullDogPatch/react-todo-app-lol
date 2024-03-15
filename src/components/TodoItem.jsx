import styles from './todoitem.module.css';

function TodoItem({ item }) {
  return (
    <>
      <div className={styles.todoitemContainer}>
        <div className={styles.todoTitle}>{item}</div>
      </div>
    </>
  );
}
export default TodoItem;
