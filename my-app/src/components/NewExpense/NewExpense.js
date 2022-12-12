import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  // Function to receive data from child ExpenseForm component
  // Pass this function as a prop to child component, then call this function within child component and pass required data to the argument
  const submitExpenseDataHandler = (userInput) => {
    const expenseData = {
      ...userInput,
      // Add a id for the expenseData
      id: Math.random(),
    };
    // Pass the expenseData to parent component App.js by calling the prop function and passing in the required data as the argument
    props.onAddExpense(expenseData);
    // Close the form upon submit
    setIsAddNewExpense(false);
  };

  // State to manage when the form is showed or not
  const [isAddNewExpense, setIsAddNewExpense] = useState(false);

  // Function to change state when add expense button is clicked
  const addExpenseHandler = () => {
    setIsAddNewExpense(true);
  };

  // Function to change state when cancel add expense button is clicked
  // Pass this as a prop to child component ExpenseForm to change state when cancel button is clicked
  const cancelAddExpenseHandler = () => {
    setIsAddNewExpense(false);
  };

  return (
    <div className="new-expense">
      {!isAddNewExpense && (
        <button onClick={addExpenseHandler}>Add new expenses</button>
      )}
      {isAddNewExpense && (
        <ExpenseForm
          onSubmitExpenseData={submitExpenseDataHandler}
          onCancel={cancelAddExpenseHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
