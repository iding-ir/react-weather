import { useForecasts } from "../../hooks/use-forecasts";
import styles from "./Forecast.module.scss";
import { Item } from "./Item";

export const Forecast = () => {
  const { forecast } = useForecasts();

  return (
    <div className={styles.container}>
      <h2>5 days forecast</h2>

      <ul>{forecast?.map((item) => <Item key={item.day} item={item} />)}</ul>
    </div>
  );
};
