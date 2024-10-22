import { useState } from "react";

import { useAppDispatch } from "../../app/hooks";
import { setCity } from "../../features/city";
import { City, useGetCityQuery } from "../../features/services/city";
import { AutoComplete } from "../AutoComplete";
import styles from "./Search.module.scss";

export const Search = () => {
  const dispatch = useAppDispatch();
  const [autocomplete, setAutocomplete] = useState(false);
  const { data } = useGetCityQuery(5);

  const handleClick = (city: City) => {
    console.log(city);

    dispatch(setCity(city.key));
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
