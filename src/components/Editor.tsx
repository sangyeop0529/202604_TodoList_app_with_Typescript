import { useRef, useState } from "react";
import styles from "./Editor.module.css";

interface EditorProps {
  onCreate: (content: string) => void;
}

const Editor = ({ onCreate }: EditorProps) => {
  const [content, setContent] = useState("");
  const contentRef = useRef<HTMLInputElement>(null);

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setContent(e.target.value);
  };

  const onKeydown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = (): void => {
    if (content === "") {
      contentRef.current?.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };
  return (
    <div className={styles.Editor}>
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeydown}
        onChange={onChangeContent}
        type="text"
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
