import clsx from "clsx";

import { useAppDispatch } from "../../app/hooks";
import { UNITS, setUnit } from "../../features/unit";
import styles from "./Current.module.scss";

export const Current = () => {
  const dispatch = useAppDispatch();

  const handleChangeUnit = (unit: UNITS) => {
    dispatch(setUnit(unit));
  };

  return (
    <div className={styles.container}>
      <div className={styles.location}>Amsterdam, NL</div>
      <div className={styles.temperature}>7℃</div>
      <div
        className={clsx(styles.switch, styles.centigrade)}
        onClick={() => handleChangeUnit(UNITS.centigrade)}
      >
        C
      </div>
      <div
        className={clsx(styles.switch, styles.fahrenheit)}
        onClick={() => handleChangeUnit(UNITS.fahrenheit)}
      >
        F
      </div>
      <div className={styles.description}>Thursday, light rain</div>
    </div>
  );
};
