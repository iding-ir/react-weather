import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../createAppSlice";
import { City } from "../services/city";

export interface CityState {
  current?: City;
}

const initialState: CityState = {
  current: undefined,
};

export const citySlice = createAppSlice({
  name: "city",
  initialState,
  reducers: (create) => ({
    setCity: create.reducer((state, { payload }: PayloadAction<City>) => {
      state.current = payload;
    }),
  }),
  selectors: {
    selectCity: ({ current }) => current,
  },
});

export const { setCity } = citySlice.actions;

export const { selectCity } = citySlice.selectors;
