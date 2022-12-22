import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpenseAction } from "../../store/expense/expense-slice";
import style from "./expense.module.css";

const ExpenseInput = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function submit(event) {
    event.preventDefault();
    dispatch(addExpenseAction({ name, price }));
    setName("");
    setPrice("");
  }

  function handleItem(event) {
    setName(event.target.value);
  }
  function handlePrice(event) {
    setPrice(event.target.value);
  }
  return (
    <form onSubmit={submit} className={style.container}>
      <input
        className={style.in}
        value={name}
        onChange={handleItem}
        type={`text`}
        placeholder="Expense name"
      />
      <input
        className={style.in}
        value={price}
        onChange={handlePrice}
        type={`number`}
        placeholder="Expense price"
      />
      <button
        className={style.btn}
        disabled={
          !(name && name.trim().length > 1 && price && price.length > 0)
        }
      >
        Add
      </button>
    </form>
  );
};

export default ExpenseInput;
