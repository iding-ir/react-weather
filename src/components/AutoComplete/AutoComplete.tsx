import styles from "./AutoComplete.module.scss";

export const AutoComplete = <T,>({
  items,
  renderItem,
  onClick,
}: {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  onClick: (item: T) => void;
}) => {
  return (
    <ul className={styles.container}>
      {items.map((item, index) => (
        <li key={index} onClick={() => onClick(item)}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};
