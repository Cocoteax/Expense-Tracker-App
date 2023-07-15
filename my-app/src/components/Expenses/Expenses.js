import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2023");
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

  // See Card.js to check how we use a custom component as a wrapper
  return (
    <div>
      <Card className="expenses">
        {/* Note how we perform 2-way binding to pass filteredYear state as a prop to ExpenseFilter so that we can set the initial dropdown value on the select element*/}
        <ExpensesFilter
          onSelectYear={selectYearHandler}
          selectedYear={filteredYear}
        />
        <ExpensesChart items={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
