import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseInterface from "../types/types";
import Card from "../UI/Card";
const Expenses = (props:{expenses:ExpenseInterface[]}) => {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
