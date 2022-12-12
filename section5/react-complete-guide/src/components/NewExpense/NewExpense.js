import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isShown, setIsShown] = useState(false);
  const saveExpenseDataHandler = (passedExpenseData) => {
    const expenseData = {
      ...passedExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsShown(false);
  };
  const startEditingHandler = () => {
    setIsShown(true);
  }
  const stopEditingHandler = () => {
    setIsShown(false);
  }
  return (
    <div className="new-expense">
      {isShown ? (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onStopEditing={stopEditingHandler}/>
      ) : (
        <div>
          <button onClick={startEditingHandler}>Add New Expense</button>
        </div>
      )}
    </div>
  );
};

export default NewExpense;
