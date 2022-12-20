import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Laptop",
    price: 1500.0,
  },
  {
    id: 2,
    name: "Graphic Tablet",
    price: 7500.0,
  },
];

const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState,
  reducers: {
    addExpenseAction: (currentSlice, action) => {
      currentSlice.push({ id: currentSlice.length + 1, ...action.payload });
    },
    evaluateExpenseAction: (currentSlice) => {},
    removeExpenseAction: (currentSlice, action) => {
      console.log(action.payload);
      currentSlice = currentSlice.filter((ex) => ex.id !== action.payload.id);
      console.log(currentSlice);
    },
  },
});

export const expensesSelector = (state) => state.EXPENSES;

export default expenseSlice.reducer;
export const { addExpenseAction, removeExpenseAction } = expenseSlice.actions;
