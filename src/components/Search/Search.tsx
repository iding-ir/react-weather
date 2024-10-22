import styles from "./Search.module.scss";

export const Search = () => {
  return (
    <div className={styles.container}>
      <label>City Name:</label>
      <input type="text" />
    </div>
  );
};
