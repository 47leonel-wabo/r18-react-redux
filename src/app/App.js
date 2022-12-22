import ExpenseHistory from "../components/expense-history/ExpenseHistory";
import AppLogo from "../components/logo/AppLogo";
import BudgetInput from "../containers/expense-budget/BudgetInput";
import ExpenseInput from "../containers/expense-input/ExpenseInput";
import SumExpense from "../containers/total-expense/SumExpense";
import style from "./app.module.css";

function App() {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.logo}>
          <AppLogo />
        </div>
        <div className={style.income}>
          <BudgetInput />
        </div>
      </div>
      <div className={style.content}>
        <div className={style.in}>
          <ExpenseInput />
        </div>
        <div className={style.hist}>
          <ExpenseHistory />
        </div>
        <div className={style.total}>
          <SumExpense />
        </div>
      </div>
    </div>
  );
}

export default App;
