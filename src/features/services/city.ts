import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type City = {
  key: string;
  name: string;
  country: string;
};

export const cityApi = createApi({
  reducerPath: "cityApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    getCity: builder.query<City[], number>({
      query: () => `cities.json`,
    }),
  }),
});

export const { useGetCityQuery } = cityApi;
