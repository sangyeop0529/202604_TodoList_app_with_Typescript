import { useRef, useState } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import "./App.css";
import type { Todo } from "./type";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const idRef = useRef<number>(3);

  const onCreate = (content: string): void => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([...todos, newTodo]);
  };

  const onUpdate = (targetId: number): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };

  const onDelete = (targetId: number): void => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="app">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
};

export default App;
