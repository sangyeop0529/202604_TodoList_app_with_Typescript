import styles from "./List.module.css";
import TodoItem from "./TodoItem";

const List = () => {
  return (
    <div className={styles.List}>
      <h4>Todo List ✌️</h4>
      <input type="text" placeholder="검색어를 입력해주세요." />
      <div className={styles.todos_wrapper}>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default List;
