import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const newExpense = (props) => {
  const saveExpenseDataHandler = (passedExpenseData) => {
    const expenseData = {
      ...passedExpenseData,
      id: Math.random().toString()
    }
    console.log(expenseData);
    props.onAddExpense(expenseData);
  }

  return <div className="new-expense">
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
  </div>
};

export default newExpense;