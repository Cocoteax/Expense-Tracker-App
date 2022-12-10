import React from "react";
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
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpenseData={submitExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
