import { useRef, useState } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import "./App.css";
import type { Todo } from "./type";

const mockData: Todo[] = [
  { id: 0, isDone: false, content: "React", date: new Date().getTime() },
  { id: 1, isDone: false, content: "TypeScript", date: new Date().getTime() },
  { id: 2, isDone: false, content: "Python", date: new Date().getTime() },
];

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(mockData);
  const idRef = useRef(3);

  const onCreate = (content: string): void => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([...todos, newTodo]);
  };
  return (
    <div className="app">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} />
    </div>
  );
};

export default App;
