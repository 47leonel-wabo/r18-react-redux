import React from "react";
import { useDispatch } from "react-redux";
import { removeExpenseAction } from "../../store/expense/expense-slice";
import style from "./expense.module.css";

const Expense = ({ expense }) => {
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(removeExpenseAction({ id: expense.id }));
  }
  return (
    <div className={style.container}>
      <div className={style.name}>{expense.name}</div>
      <div className={style.bottom}>
        <div className={style.actions}>
          <button className={style.del} onClick={() => handleDelete()}>
            Del
          </button>
        </div>
        <div className={style.price}>${expense.price}</div>
      </div>
    </div>
  );
};

export default Expense;
