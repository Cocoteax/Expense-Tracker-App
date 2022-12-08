import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // We access the props passed in by the parent component via the single props parameter
  // props is an object that contains the key-value data that is passed in by the parent component
  // console.log(props);

  // See Card.js to check how we use custom components as wrappers
  // Note that className="expense-item" is now passed as a prop to Card component instead of a CSS class since our wrapper is a custom component
  // Hence, we must apply the CSS className within the Card component
  return (
    <Card className="expense-item">
      {/* Pass the props.date to ExpenseDate component */}
      <ExpenseDate date={props.date} />
      {/* Use curly braces to dynamically insert data */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
