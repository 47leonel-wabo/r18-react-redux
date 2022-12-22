import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  budgetSelector,
  setExpensesBudget,
} from "../../store/expense/expense-slice";
import style from "./budget.module.css";

const BudgetInput = () => {
  const defaultBudget = useSelector(budgetSelector);
  const [budget, setBudget] = useState(defaultBudget);
  const dispatch = useDispatch();

  function defineBudget() {
    const value = Number.parseFloat(budget);
    if (value >= defaultBudget) {
      dispatch(setExpensesBudget(value));
    }
  }
  return (
    <div className={style.container}>
      <input
        className={style.in}
        type="number"
        placeholder="Your budget"
        value={budget}
        onChange={(event) => setBudget(event.target.value)}
      />
      <button className={style.btn} onClick={defineBudget}>
        Save
      </button>
    </div>
  );
};

export default BudgetInput;
