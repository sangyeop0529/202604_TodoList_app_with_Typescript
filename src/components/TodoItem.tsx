import type { Todo } from "../type";
import styles from "./TodoItem.module.css";

const TodoItem = ({ isDone, content, date }: Todo) => {
  return (
    <div className={styles.TodoItem}>
      <input readOnly checked={isDone} type="checkbox" />
      <div className={styles.content}>{content}</div>
      <div className={styles.date}>{new Date(date).toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
