import React from "react";
import { useSelector } from "react-redux";
import { expensesSelector } from "../../store/expense/expense-slice";
import Expense from "../expense-item/Expense";
import style from "./history.module.css";

const ExpenseHistory = () => {
  const expenses = useSelector(expensesSelector);
  if (expenses.length === 0) {
    return (
      <div className={style.empty}>
        <span className={style.msg}>No Content to show</span>
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
