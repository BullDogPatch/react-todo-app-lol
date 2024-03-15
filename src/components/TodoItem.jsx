import styles from './todoitem.module.css';

function TodoItem({ item }) {
  return (
    <>
      <div className={styles.todoitemContainer}>
        <h3 className={styles.todoTitle}>{item}</h3>
        {/* <button>Delete</button> */}
        {/* <hr className={styles.seprator} /> */}
      </div>
    </>
  );
}
export default TodoItem;
