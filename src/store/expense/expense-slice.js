import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenseList: [],
  budget: 1500.0,
};

const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState,
  reducers: {
    addExpenseAction: (currentSlice, action) => {
      currentSlice.expenseList.push({
        id: currentSlice.length + 1,
        ...action.payload,
      });
    },
    removeExpenseAction: (currentSlice, action) => {},
    setExpensesBudget: (currentSlice, action) => {
      currentSlice.budget = action.payload;
    },
  },
});

export const expensesSelector = (state) => state.EXPENSES.expenseList;
export const budgetSelector = (state) => state.EXPENSES.budget;

export default expenseSlice.reducer;
export const { addExpenseAction, removeExpenseAction, setExpensesBudget } =
  expenseSlice.actions;
