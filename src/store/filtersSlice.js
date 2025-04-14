import { createSlice } from "@reduxjs/toolkit";

const loadFiltersState = () => {
  const serializedState = localStorage.getItem("filtersState");
  if (serializedState) {
    return JSON.parse(serializedState);
  }
  return { presenceFilter: "all", searchQuery: "" };
};

const initialState = loadFiltersState();

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setPresenceFilter: (state, action) => {
      state.presenceFilter = action.payload;
    },
  },
});

export const saveFiltersStateToLocalStorage = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("filtersState", serializedState);
};

export const { setSearchQuery, setPresenceFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
