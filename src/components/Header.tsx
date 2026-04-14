import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.Header}>
      <h3>오늘은 📅</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default Header;
