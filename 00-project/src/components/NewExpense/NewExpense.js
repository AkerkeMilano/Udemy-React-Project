import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAddExpense(false);
  };
  const [addExpense, setAddExpense] = useState(false);

  const showExpenseForm = () => {
    setAddExpense(true);
  };
  const closeExpenseForm = () => {
    setAddExpense(false);
  };
  return (
    <div className="new-expense">
      {!addExpense ? (
        <button type="button" onClick={showExpenseForm}>
          Add New Expense
        </button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCloseExpenseForm={closeExpenseForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
