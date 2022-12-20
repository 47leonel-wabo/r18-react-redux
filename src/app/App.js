import ExpenseHistory from "../components/expense-history/ExpenseHistory";
import ExpenseInput from "../components/expense-input/ExpenseInput";
import style from "./app.module.css";

function App() {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.logo}>Logo</div>
        <div className={style.income}>Income input</div>
      </div>
      <div className={style.content}>
        <div className={style.in}>
          <ExpenseInput />
        </div>
        <div className={style.hist}>
          <ExpenseHistory />
        </div>
        <div className={style.total}>Expense total</div>
      </div>
    </div>
  );
}

export default App;
