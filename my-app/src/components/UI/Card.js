import React from "react";
import "./Card.css";

function Card(props) {
  // To apply the CSS class passed in from ExpenseItem.js and Expense.js,
  // we must access the className prop and apply it directly to the Card component
  let classes = "card " + props.className;

  // props.children is used to access the data between the wrapper component in ExpenseItem.js
  return <div className={classes}>{props.children}</div>;
}

export default Card;
