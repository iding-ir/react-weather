import { Chart } from "../Chart";
import { Current } from "../Current";
import { Forecast } from "../Forecast";
import { Header } from "../Header";
import { Search } from "../Search";
import styles from "./App.module.scss";

export const App = () => {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <Header />
      </header>

      <nav className={styles.search}>
        <Search />
      </nav>

      <section className={styles.current}>
        <Current />
      </section>

      <section className={styles.forecast}>
        <Forecast />
      </section>

      <section className={styles.chart}>
        <Chart />
      </section>
    </main>
  );
};
