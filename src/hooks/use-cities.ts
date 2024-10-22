import { useGetCityQuery } from "../features/services/city";

export const useCity = () => {
  const { data } = useGetCityQuery(5);

  return { data };
};
