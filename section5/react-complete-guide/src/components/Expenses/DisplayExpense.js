import { useState } from "react";
// Assignment 1: React & Component Basic
import Card from "../UI/Card";
import "./DisplayExpense.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
// import ExpenseItem from "./ExpenseItem";
import ExpenseList from "./ExpensesList";

function DisplayExpense(props) {
  const [filterYear, setFilterYear] = useState("2020");
  const filterYearHandler = (passedFilterYear) => {
    setFilterYear(passedFilterYear);
    console.log(passedFilterYear);
  };
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filterYear}
          onFilterYearChanged={filterYearHandler}
        />
        {/* <h2>This is DisplayExpense!</h2> */}
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </li>
  );
}
export default DisplayExpense;
