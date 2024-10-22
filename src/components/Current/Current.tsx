import clsx from "clsx";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { UNITS, selectUnit, setUnit } from "../../features/unit";
import { useForecasts } from "../../hooks/use-forecasts";
import { getTemperature } from "../../methods/get-temperature";
import { getUnitSymbol } from "../../methods/get-unit-symbol";
import styles from "./Current.module.scss";

export const Current = () => {
  const dispatch = useAppDispatch();
  const unit = useAppSelector(selectUnit);
  const { city, current } = useForecasts();

  const handleChangeUnit = (unit: UNITS) => {
    dispatch(setUnit(unit));
  };

  if (!city || !current) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.location}>
        {city.name}, {city.country}
      </div>
      <div className={styles.temperature}>
        {getTemperature(current.temperature, unit)}
        {getUnitSymbol(unit)}
      </div>
      <div
        className={clsx(styles.switch, styles.centigrade)}
        onClick={() => handleChangeUnit(UNITS.centigrade)}
      >
        {getUnitSymbol(UNITS.centigrade)}
      </div>
      <div
        className={clsx(styles.switch, styles.fahrenheit)}
        onClick={() => handleChangeUnit(UNITS.fahrenheit)}
      >
        {getUnitSymbol(UNITS.fahrenheit)}
      </div>
      <div className={styles.description}>
        {current.day}, {current.details}
      </div>
    </div>
  );
};
