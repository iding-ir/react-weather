import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Weather = {
  day: string;
  icon: string;
  max: string;
  min: string;
  details: string;
};

export type Forecast = {
  key: string;
  city: string;
  current: Weather;
  forecast: Weather[];
};

export const forecastApi = createApi({
  reducerPath: "forecastApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    getForecast: builder.query<Forecast[], number>({
      query: () => `forecasts.json`,
    }),
  }),
});

export const { useGetForecastQuery } = forecastApi;
