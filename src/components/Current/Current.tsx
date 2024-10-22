import clsx from "clsx";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectCity } from "../../features/city";
import { useGetForecastQuery } from "../../features/services/forecast";
import { UNITS, Unit, selectUnit, setUnit } from "../../features/unit";
import styles from "./Current.module.scss";

export const Current = () => {
  const dispatch = useAppDispatch();
  const { data } = useGetForecastQuery(5);
  const city = useAppSelector(selectCity);
  const unit = useAppSelector(selectUnit);

  if (!data || !city) {
    return null;
  }

  const cityData = data.find((item) => item.key === city.key);

  if (!cityData) {
    return null;
  }

  const handleChangeUnit = (unit: UNITS) => {
    dispatch(setUnit(unit));
  };

  return (
    <div className={styles.container}>
      <div className={styles.location}>
        {city.name}, {city.country}
      </div>
      <div className={styles.temperature}>
        {getTemperature(Number(cityData.current.temperature), unit)}
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
        {cityData.current.day}, {cityData.current.details}
      </div>
    </div>
  );
};

const getUnitSymbol = (unit: Unit) => {
  switch (unit) {
    case UNITS.centigrade:
      return "°C";
    case UNITS.fahrenheit:
      return "°F";
  }
};

const getTemperature = (temperature: number, unit: Unit) => {
  switch (unit) {
    case UNITS.centigrade:
      return temperature;
    case UNITS.fahrenheit:
      return convertToFahrenheit(temperature);
  }
};

const convertToFahrenheit = (temperature: number) => {
  return temperature * 1.8 + 32;
};
