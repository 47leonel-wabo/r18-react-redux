import React from "react";
import style from "./expense.module.css";

const ExpenseInput = () => {
  return (
    <div className={style.container}>
      <input className={style.in} type={`text`} placeholder="Expense name" />
      <input className={style.in} type={`number`} placeholder="Expense price" />
      <button className={style.btn}>Add</button>
    </div>
  );
};

export default ExpenseInput;
