import styles from ".//TodoItem.module.css";

const TodoItem = () => {
  return (
    <div className={styles.TodoItem}>
      <input type="checkbox" />
      <div className={styles.content}>Todo...</div>
      <div className={styles.date}>Date</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
