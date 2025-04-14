import { createSlice } from "@reduxjs/toolkit";

const loadVisitorsState = () => {
  const serializedState = localStorage.getItem("visitorsState");
  if (serializedState) {
    return JSON.parse(serializedState);
  }
  return [
    {
      visitorNum: 1,
      name: "Иванов Иван Иванович",
      company: 'ООО "Пример"',
      group: "Прохожий",
      isPresent: true,
    },
    {
      visitorNum: 2,
      name: "Петров Петр Петрович",
      company: 'АО "Компания"',
      group: "Клиент",
      isPresent: true,
    },
    {
      visitorNum: 3,
      name: "Сидоров Сергей Сергеевич",
      company: 'ЗАО "Тест"',
      group: "Партнер",
      isPresent: false,
    },
  ];
};

const initialState = loadVisitorsState();

export const visitorsSlice = createSlice({
  name: "visitors",
  initialState,
  reducers: {
    addVisitor: (state, action) => {
      const newVisitor = {
        ...action.payload,
        visitorNum: state.length + 1,
      };
      state.push(newVisitor);
    },
    updateVisitor: (state, action) => {
      const index = state.findIndex(
        (v) => v.visitorNum === action.payload.visitorNum
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const saveVisitorsStateToLocalStorage = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("visitorsState", serializedState);
};

export const { addVisitor, updateVisitor, setSearchQuery } =
  visitorsSlice.actions;

export default visitorsSlice.reducer;
