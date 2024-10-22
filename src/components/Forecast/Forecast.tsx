import { useAppSelector } from "../../app/hooks";
import { selectCity } from "../../features/city";
import { useGetForecastQuery } from "../../features/services/forecast";
import styles from "./Forecast.module.scss";
import { Item } from "./Item";

export const Forecast = () => {
  const { data } = useGetForecastQuery(5);
  const city = useAppSelector(selectCity);

  if (!data || !city) {
    return null;
  }

  const cityData = data.find((item) => item.key === city.key);

  if (!cityData) {
    return null;
  }

  return (
    <div className={styles.container}>
      <h2>5 days forecast</h2>

      <ul>
        {cityData.forecast.map((item) => (
          <Item key={item.day} item={item} />
        ))}
      </ul>
    </div>
  );
};
