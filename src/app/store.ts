import {
  Action,
  ThunkAction,
  combineSlices,
  configureStore,
} from "@reduxjs/toolkit";

import { citySlice } from "../features/city";
import { cityApi } from "../features/services/city";
import { forecastApi } from "../features/services/forecast";
import { unitSlice } from "../features/unit";

const rootReducer = combineSlices(unitSlice, citySlice, cityApi, forecastApi);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(cityApi.middleware)
      .prepend(forecastApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
