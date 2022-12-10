import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  // React only evaluates and renders each component exactly once upon intialisation, hence useState is used to re-evaluate and re-render specific components upon events occuring
  // useState is a react hook, which must be called directly within the component function
  // useState accepts the "default value" as a parameter and returns an array containing 2 things: current state of the state variable and function
  // current state initially holds the "default value" and function is used to change the state value
  // any changes to the state above will result in the component being re-evaluated and re-rendered

  // useState to store separate input values into different states
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // // Note how we pass in an object to store separate input values into a single state
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // Functions to change different states such that component is re-evaluated and re-rendered
  let titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // If we are not updating current state based on prev state, we can use this syntax
    // setUserInput({
    //   ...userInput, // Use spread syntax to avoid losing the other state values within the object
    //   enteredTitle: event.target.value,
    // });

    // // If we are updating current state based on prev state, we should use this syntax to garuntee that we are updating based on prev state
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState, // prevState refers to the latest version of the userInput state
    //     enteredTitle: event.target.value,
    //   };
    // });
  };

  let amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  let dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  let submitHandler = (event) => {
    event.preventDefault();

    // onSubmit, we extract the user input and store it in a expenseData object to be used later
    // Note how we extract user input by getting the state values
    let expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // Pass the expenseData to parent component NewExpense by calling the prop function and passing in the required data as the argument
    props.onSubmitExpenseData(expenseData);
    // Clear form data after submission, note that we need to bind the states to the value attribute of the input elements
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
