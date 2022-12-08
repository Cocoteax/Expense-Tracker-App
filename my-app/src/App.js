import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// In real practice, we should extract these data from a DB
const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  // To update the screen each time we add new expenses, we need to store the INITIAL_EXPENSES array as a state
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  // Function to receive data from child NewExpense component
  const addExpenseHandler = (expense) => {
    // Since we update the state based on previous state, we use this syntax to gain access to latest state
    setExpenses((prevState) => {
      // Add new expense to the beginning of INITIAL_EXPENSES array
      return [expense, ...prevState]
    });
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* This is how we pass props (data) from parent component to custom components */}
      <Expenses items={expenses} />
    </div>
  );
}

// default keyword makes it such that App is the default thing that is being exported
// when we import from App.js, we know that App will be the default thing that we are importing, so we can name it however
// Without default keyword, we need to use {} to specify the specific thing we are importing
export default App;
