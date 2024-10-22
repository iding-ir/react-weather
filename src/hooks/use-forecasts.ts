import { useAppSelector } from "../app/hooks";
import { selectCity } from "../features/city";
import { useGetForecastQuery } from "../features/services/forecast";

export const useForecasts = () => {
  const city = useAppSelector(selectCity);
  const { data } = useGetForecastQuery(5);

  const cityData = city && data?.find((item) => item.key === city.key);
  const { current, forecast } = cityData || {};

  return { city, current, forecast };
};
