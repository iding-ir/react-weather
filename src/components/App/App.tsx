import styles from "./App.module.scss";

export const App = () => {
  return (
    <main className={styles.container}>
      <header className={styles.header}>header</header>

      <nav className={styles.search}>search</nav>

      <div className={styles.current}>current</div>

      <div className={styles.forecast}>forecast</div>

      <div className={styles.chart}>chart</div>
    </main>
  );
};
