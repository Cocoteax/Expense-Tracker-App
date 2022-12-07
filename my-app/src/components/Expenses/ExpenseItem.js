import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // We access the props passed in by the parent component via the single props parameter
  // props is an object that contains the key-value data that is passed in by the parent component
  console.log(props);

  const [title, setTitle] = useState(props.title); // use array destructuring to separate the state and function

  let clickHandler = () => {
    // To change value of state, we call the function obtained from useState() and pass in the updated value
    setTitle("updated!");
  };

  // See Card.js to check how we use custom components as wrappers
  // Note that className="expense-item" is now passed as a prop to Card component instead of a CSS class since our wrapper is a custom component
  // Hence, we must apply the CSS className within the Card component
  return (
    <Card className="expense-item">
      {/* Pass the props.date to ExpenseDate component */}
      <ExpenseDate date={props.date} />
      {/* Use curly braces to dynamically insert data */}
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      {/* set onClick listener for built-in html elements */}
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
