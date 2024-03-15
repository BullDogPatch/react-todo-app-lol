import styles from './todoitem.module.css';

function TodoItem({ item }) {
  const handleDelete = (item) => {
    console.log(item);
  };
  return (
    <>
      <div className={styles.todoitemContainer}>
        <div className={styles.todoitem}>
          <h5>{item}</h5>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteBtn}
          >
            X
          </button>
        </div>
      </div>
      <hr className={styles.seperator} />
    </>
  );
}
export default TodoItem;
