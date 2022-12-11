import { useState } from 'react';
// Assignment 1: React & Component Basic
import Card from '../UI/Card';
import './DisplayExpense.css';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from "./ExpenseItem";

function DisplayExpense(props) {
  const expenses = props.expenses;
  const [filterYear, setFilterYear] = useState('2020');
  const filterYearHandler = (passedFilterYear) => {
    setFilterYear(passedFilterYear);
    console.log(passedFilterYear)
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={filterYear} onFilterYearChanged={filterYearHandler}/>
        <h2>This is DisplayExpense!</h2>
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        />
      </Card>
    </div>
  );
}
export default DisplayExpense;