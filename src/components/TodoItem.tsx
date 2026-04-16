import type { Todo } from "../type";
import styles from "./TodoItem.module.css";

interface TodoItemProps extends Todo {
  onUpdate: (targetId: number) => void;
  onDelete: (targetId: number) => void;
}

const TodoItem = ({
  id,
  isDone,
  content,
  date,
  onUpdate,
  onDelete,
}: TodoItemProps) => {
  const onChangeCheckBox = () => {
    onUpdate(id);
  };
  const onClickDeleteButton = () => {
    onDelete(id);
  };
  return (
    <div className={styles.TodoItem}>
      <input onChange={onChangeCheckBox} checked={isDone} type="checkbox" />
      <div className={styles.content}>{content}</div>
      <div className={styles.date}>{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

export default TodoItem;
