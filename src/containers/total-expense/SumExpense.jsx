import React from "react";
import { useSelector } from "react-redux";
import {
  budgetSelector,
  expensesSelector,
} from "../../store/expense/expense-slice";
import style from "./total.module.css";

const SumExpense = () => {
  const budget = useSelector(budgetSelector);
  const expenseList = useSelector(expensesSelector);

  function evaluateExpense() {
    return expenseList.reduce(
      (acc, current) =>
        Number.parseFloat(acc) + Number.parseFloat(current.price),
      0
    );
  }

  return (
    <div className={style.container}>
      <div className={style.budget}>
        <h4 className={style.title}>Amount to spend</h4>
        <span className={style.amount}>${budget}</span>
      </div>
      <hr style={{}} />
      <div className={style.remains}>
        <h4 className={style.title}>BILL</h4>
        <span className={style.rv}>${evaluateExpense()}</span>
      </div>
    </div>
  );
};

export default SumExpense;
