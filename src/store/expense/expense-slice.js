import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Laptop",
    price: 1500.0,
  },
  {
    name: "Graphic Tablet",
    price: 7500.0,
  },
];

const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState,
  reducers: {
    addExpenseAction: (currentSlice, action) => {
      currentSlice.push(action.payload);
    },
  },
});

export default expenseSlice.reducer;
export const { addExpenseAction } = expenseSlice.actions;
