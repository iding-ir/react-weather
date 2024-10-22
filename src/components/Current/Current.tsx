import clsx from "clsx";

import styles from "./Current.module.scss";

export const Current = () => {
  return (
    <div className={styles.container}>
      <div className={styles.location}>Amsterdam, NL</div>
      <div className={styles.temperature}>7℃</div>
      <div className={clsx(styles.switch, styles.centigrade)}>C</div>
      <div className={clsx(styles.switch, styles.fahrenheit)}>F</div>
      <div className={styles.description}>Thursday, light rain</div>
    </div>
  );
};
