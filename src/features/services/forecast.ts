import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Current = {
  day: string;
  icon: string;
  temperature: number;
  details: string;
};

export type Weather = {
  day: string;
  icon: string;
  max: number;
  min: number;
  details: string;
};

export type Forecast = {
  key: string;
  city: string;
  current: Current;
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
