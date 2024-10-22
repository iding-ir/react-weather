import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../createAppSlice";
import { DEFAULT_UNIT, Unit } from "./unit";

export interface UnitState {
  current: Unit;
}

const initialState: UnitState = {
  current: DEFAULT_UNIT,
};

export const unitSlice = createAppSlice({
  name: "unit",
  initialState,
  reducers: (create) => ({
    setUnit: create.reducer((state, { payload }: PayloadAction<Unit>) => {
      state.current = payload;
    }),
  }),
  selectors: {
    selectUnit: ({ current }) => current,
  },
});

export const { setUnit } = unitSlice.actions;

export const { selectUnit } = unitSlice.selectors;
