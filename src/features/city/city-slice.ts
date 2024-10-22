import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../createAppSlice";

export interface CityState {
  current: string | null;
}

const initialState: CityState = {
  current: null,
};

export const citySlice = createAppSlice({
  name: "city",
  initialState,
  reducers: (create) => ({
    setCity: create.reducer((state, { payload }: PayloadAction<string>) => {
      state.current = payload;
    }),
  }),
  selectors: {
    selectCity: ({ current }) => current,
  },
});

export const { setCity } = citySlice.actions;

export const { selectCity } = citySlice.selectors;
