import styles from "./Editor.module.css";

const Editor = () => {
  return (
    <div className={styles.Editor}>
      <input type="text" placeholder="새로운 Todo..." />
      <button>추가</button>
    </div>
  );
};

export default Editor;
