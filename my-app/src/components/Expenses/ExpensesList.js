import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  // Render expensesContent conditionally
  let expensesContent = (
    <h2 className="expenses-list__fallback">No expenses found.</h2>
  );
  if (props.items.length > 0) {
    // To dynamically render custom components, we use .map() to create an array that holds all the custom components
    // React is able to render multiple components if they are stored in an array
    // Note that when we render multiple components, it is BEST PRACTICE to include the built-in key prop to help react uniquely identify which component it is rendering
    expensesContent = props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return <ul className="expenses-list">{expensesContent}</ul>;
}

export default ExpensesList;
