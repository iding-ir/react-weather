import { useState } from "react";

import { useAppDispatch } from "../../app/hooks";
import { setCity } from "../../features/city";
import { City } from "../../features/services/city";
import { useCity } from "../../hooks/use-cities";
import { AutoComplete } from "../AutoComplete";
import styles from "./Search.module.scss";

export const Search = () => {
  const dispatch = useAppDispatch();
  const [autocomplete, setAutocomplete] = useState(false);
  const { data } = useCity();

  const handleClick = (city: City) => {
    dispatch(setCity(city));
    setAutocomplete(false);
  };

  return (
    <div className={styles.container}>
      <label>City Name:</label>
      <input type="text" onFocus={() => setAutocomplete(true)} />

      {!!data && autocomplete && (
        <AutoComplete
          items={data}
          onClick={handleClick}
          renderItem={(item) => <div>{item.name}</div>}
        />
      )}
    </div>
  );
};
