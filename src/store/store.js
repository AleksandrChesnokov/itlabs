import { configureStore } from "@reduxjs/toolkit";
import visitorsSlice from "./visitorsSlice";
import filtersReducer from "./filtersSlice";
import { saveVisitorsStateToLocalStorage } from "./visitorsSlice";
import { saveFiltersStateToLocalStorage } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    visitors: visitorsSlice,
    filters: filtersReducer,
  },
});

store.subscribe(() => {
  saveVisitorsStateToLocalStorage(store.getState().visitors);
  saveFiltersStateToLocalStorage(store.getState().filters);
});
