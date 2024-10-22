import Cloudy from "../../assets/icons/icon-cloudy.svg";
import styles from "./Forecast.module.scss";

export const Forecast = () => {
  return (
    <div className={styles.container}>
      <h2>5 days forecast</h2>

      <ul>
        <li>
          <h3 className={styles.day}>Monday</h3>

          <i className={styles.icon}>
            <Cloudy />
          </i>
          <b className={styles.max}>25°C</b>
          <span className={styles.min}>10°C</span>
          <p className={styles.details}>light rain</p>
        </li>

        <li>
          <h3 className={styles.day}>Monday</h3>
          <i className={styles.icon}>
            <Cloudy />
          </i>
          <b className={styles.max}>25°C</b>
          <span className={styles.min}>10°C</span>
          <p className={styles.details}>light rain</p>
        </li>

        <li>
          <h3 className={styles.day}>Monday</h3>
          <i className={styles.icon}>
            <Cloudy />
          </i>
          <b className={styles.max}>25°C</b>
          <span className={styles.min}>10°C</span>
          <p className={styles.details}>light rain</p>
        </li>

        <li>
          <h3 className={styles.day}>Monday</h3>
          <i className={styles.icon}>
            <Cloudy />
          </i>
          <b className={styles.max}>25°C</b>
          <span className={styles.min}>10°C</span>
          <p className={styles.details}>light rain</p>
        </li>

        <li>
          <h3 className={styles.day}>Monday</h3>
          <i className={styles.icon}>
            <Cloudy />
          </i>
          <b className={styles.max}>25°C</b>
          <span className={styles.min}>10°C</span>
          <p className={styles.details}>light rain</p>
        </li>
      </ul>
    </div>
  );
};
