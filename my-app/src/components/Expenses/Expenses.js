import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  // Function to receive selected year from child ExpenseFilter component
  const selectYearHandler = (selectedYear) => {
    // console.log("Inside expenses");
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  // Use .filter() to create an array of expenses based on filteredYear, then render this array as a list of data seen below
  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  
  // Render expensesContent conditionally 
  let expensesContent = <p>No expenses found.</p>
  if(filteredExpenses.length > 0) {
    // To dynamically render custom components, we use .map() to create an array that holds all the custom components
    // React is able to render multiple components if they are stored in an array
    // Note that when we render multiple components, it is BEST PRACTICE to include the built-in key prop to help react uniquely identify which component it is rendering
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }
  console.log(expensesContent)
  // See Card.js to check how we use a custom component as a wrapper
  return (
    <div>
      <Card className="expenses">
        {/* Note how we perform 2-way binding to pass filteredYear state as a prop to ExpenseFilter so that we can set the initial dropdown value on the select element*/}
        <ExpensesFilter
          onSelectYear={selectYearHandler}
          selectedYear={filteredYear}
        />
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
