import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Editor />
      <List />
    </div>
  );
};

export default App;
