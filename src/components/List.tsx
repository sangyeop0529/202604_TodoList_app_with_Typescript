import { useState } from "react";
import styles from "./List.module.css";
import TodoItem from "./TodoItem";
import type { Todo } from "../type";

interface ListProps {
  todos: Todo[];
  onUpdate: (targetId: number) => void;
  onDelete: (targetId: number) => void;
}

const List = ({ todos, onUpdate, onDelete }: ListProps) => {
  const [search, setSearch] = useState<string>("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };
  const getFilteredData = (): Todo[] => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase()),
    );
  };

  const filteredTodos = getFilteredData();

  return (
    <div className={styles.List}>
      <h4>Todo List ✌️</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        type="text"
        placeholder="검색어를 입력해주세요."
      />
      <div className={styles.todos_wrapper}>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
