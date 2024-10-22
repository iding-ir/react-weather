import { Weather } from "../../../features/services/forecast";
import styles from "./Item.module.scss";
import Cloudy from "./icons/cloudy.svg";
import Sunny from "./icons/sunny.svg";

export const Item = ({ item }: { item: Weather }) => {
  const { day, icon, max, min, details } = item;

  return (
    <li className={styles.container}>
      <h3 className={styles.day}>{day}</h3>
      <i className={styles.icon}>{getIcon(icon)}</i>
      <b className={styles.max}>{max}</b>
      <span className={styles.min}>{min}</span>
      <p className={styles.details}>{details}</p>
    </li>
  );
};

const getIcon = (icon: string) => {
  switch (icon) {
    case "cloudy":
      return <Cloudy />;
    case "sunny":
      return <Sunny />;
    default:
      return null;
  }
};
