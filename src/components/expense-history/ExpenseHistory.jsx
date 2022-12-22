import React from "react";
import { useSelector } from "react-redux";
import { expensesSelector } from "../../store/expense/expense-slice";
import style from "./history.module.css";
import Expense from "../../containers/expense-item/Expense";

const ExpenseHistory = () => {
  const expenses = useSelector(expensesSelector);
  if (expenses.length === 0) {
    return (
      <div className={style.empty}>
        <span className={style.msg}>
          Your expense list is empty, no content to show
        </span>
        <span>Define your budget and add item - name and price.</span>
      </div>
    );
  }

  return (
    <div>
      <div className={style.title}> History </div>
      {expenses.map((expense, index) => (
        <Expense key={index} expense={expense} />
      ))}
    </div>
  );
};

export default ExpenseHistory;
